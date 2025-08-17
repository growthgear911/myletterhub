import jsPDF from 'jspdf';

export type PdfOptions = {
  fontFamily?: 'helvetica' | 'times' | 'courier';
  fontSize?: number;
};

export const generatePDF = (
  content: string,
  filename: string = 'letter.pdf',
  options: PdfOptions = {}
) => {
  const doc = new jsPDF();

  const fontFamily = options.fontFamily ?? 'helvetica';
  const fontSize = options.fontSize ?? 11;

  const margin = 20;
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const maxWidth = pageWidth - margin * 2;

  const lineHeight = Math.max(4, Math.round(fontSize * 1.15));
  const spaceHeight = lineHeight*0.4;

  let yPosition = margin;

  // Replace HTML entities and normalize <br>
  content = content
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

  // Tokenize content into parts with formatting state
  const tokenRegex = /(<\/?[biu]>|\n|[^<\n]+)/gi;
  const tokens = [...content.matchAll(tokenRegex)];

  let fontStyle = '';
  let underline = false;

  let xPosition = margin;

  for (const match of tokens) {
    const token = match[0];

    if (token === '\n') {
      yPosition += spaceHeight;
      xPosition = margin;

      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }

      continue;
    }

    const tag = token.toLowerCase();

    // Handle formatting tags
    if (tag === '<b>') fontStyle += 'b';
    else if (tag === '</b>') fontStyle = fontStyle.replace('b', '');
    else if (tag === '<i>') fontStyle += 'i';
    else if (tag === '</i>') fontStyle = fontStyle.replace('i', '');
    else if (tag === '<u>') underline = true;
    else if (tag === '</u>') underline = false;
    else {
      // It's text
      const currentStyle =
        fontStyle.includes('b') && fontStyle.includes('i')
          ? 'bolditalic'
          : fontStyle.includes('b')
          ? 'bold'
          : fontStyle.includes('i')
          ? 'italic'
          : 'normal';

      doc.setFont(fontFamily, currentStyle as any);
      doc.setFontSize(fontSize);

      const lines = doc.splitTextToSize(token.trim(), maxWidth - (xPosition - margin));

      for (const line of lines) {
        const textWidth = doc.getTextWidth(line);

        if (xPosition + textWidth > pageWidth - margin) {
          yPosition += spaceHeight;
          xPosition = margin;

          if (yPosition > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
          }
        }

        doc.text(line, xPosition, yPosition);

        if (underline && line.trim().length > 0) {
          doc.line(xPosition, yPosition + 1, xPosition + textWidth, yPosition + 1);
        }

        xPosition += textWidth + 1;
      }
    }
  }

  doc.save(filename);
};
