import { LetterTemplate } from '@/types/letter';

export const letterTemplates: LetterTemplate[] = [
  {
  id: "account-transfer-request",
  title: "Account Transfer to Another Branch Letter",
  description: "Formal request to transfer a bank account from one branch to another",
  category: "Banking",
  fields: [
    { id: "date", label: "Date", type: "date", placeholder: "", required: true },
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { id: "address", label: "Address", type: "textarea", placeholder: "Your complete address", required: true },
    { id: "accountNumber", label: "Account Number", type: "text", placeholder: "Your account number", required: true },
    { id: "currentBranch", label: "Current Branch Name", type: "text", placeholder: "Your current branch", required: true },
    { id: "newBranch", label: "New Branch Name", type: "text", placeholder: "Branch to transfer account to", required: true },
    { id: "ph", label: "Phone Number", type: "text", placeholder: "Your contact number", required: false }
  ],
  templates: {
    US: `Date: {{date}}

To,  
The Branch Manager  
{{currentBranch}}  
  
Subject: Request for Transfer of Bank Account  

Dear Sir/Madam,  

I am writing to request the transfer of my bank account from your branch to another branch of your bank. My account details are as follows:  

Account Holder Name: {{name}}  
Account Number: {{accountNumber}}  
Current Branch: {{currentBranch}}  
Address: {{address}}  

I kindly request you to transfer my account to the following branch:  
New Branch: {{newBranch}}  

I would appreciate your assistance in processing this request at the earliest and confirming the transfer.  

Thank you for your cooperation.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    UK: `Date: {{date}}

To,  
The Branch Manager  
{{currentBranch}}  

Subject: Request for Transfer of Bank Account  

Dear Sir/Madam,  

I am writing to request the transfer of my bank account from your branch to another branch of your bank. My account details are as follows:  

Account Holder Name: {{name}}  
Account Number: {{accountNumber}}  
Current Branch: {{currentBranch}}  
Address: {{address}}  

I kindly request you to transfer my account to the following branch:  
New Branch: {{newBranch}}  

I would appreciate your assistance in processing this request at the earliest and confirming the transfer.  

Thank you for your cooperation.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    INDIA: `Date: {{date}}

To,  
The Branch Manager  
{{currentBranch}}  

Subject: Request for Transfer of Bank Account  

Respected Sir/Madam,  

I am writing to request the transfer of my bank account from your branch to another branch of your bank. My account details are as follows:  

Account Holder Name: {{name}}  
Account Number: {{accountNumber}}  
Current Branch: {{currentBranch}}  
Address: {{address}}  

I kindly request you to transfer my account to the following branch:  
New Branch: {{newBranch}}  

I would appreciate your assistance in processing this request at the earliest and confirming the transfer.  

Thank you for your cooperation.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`
  }
},
  {
  id: "interest-rate-reduction-request",
  title: "Interest Rate Reduction Request Letter",
  description: "Formal request to reduce the interest rate on an existing loan account",
  category: "Banking",
  fields: [
    { id: "date", label: "Date", type: "date", placeholder: "", required: true },
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { id: "address", label: "Address", type: "textarea", placeholder: "Your complete address", required: true },
    { id: "loanAccountNumber", label: "Loan Account Number", type: "text", placeholder: "Your loan account number", required: true },
    { id: "branchName", label: "Branch Name", type: "text", placeholder: "Your branch name", required: true },
    { id: "ph", label: "Phone Number", type: "text", placeholder: "Your contact number", required: false }
  ],
  templates: {
    US: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  


Subject: Request for Interest Rate Reduction  

Dear Sir/Madam,  

I am writing to formally request a review and reduction of the interest rate on my existing loan account with your branch.  

Loan Account Holder Name: {{name}}  
Loan Account Number: {{loanAccountNumber}}  
Address: {{address}}  

Considering my consistent repayment record and the current market lending rates, I kindly request you to reassess my loan terms and reduce the applicable interest rate. A favorable adjustment would greatly support my repayment capacity and strengthen my relationship with your bank.  

I would appreciate your earliest consideration and a written response regarding this request.  

Thank you for your assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    UK: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  

Subject: Request for Interest Rate Reduction  

Dear Sir/Madam,  

I am writing to formally request a review and reduction of the interest rate on my existing loan account with your branch.  

Loan Account Holder Name: {{name}}  
Loan Account Number: {{loanAccountNumber}}  
Address: {{address}}  

Considering my consistent repayment record and the current market lending rates, I kindly request you to reassess my loan terms and reduce the applicable interest rate. A favorable adjustment would greatly support my repayment capacity and strengthen my relationship with your bank.  

I would appreciate your earliest consideration and a written response regarding this request.  

Thank you for your assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    INDIA: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  

Subject: Request for Interest Rate Reduction  

Respected Sir/Madam,  

I am writing to formally request a review and reduction of the interest rate on my existing loan account with your branch.  

Loan Account Holder Name: {{name}}  
Loan Account Number: {{loanAccountNumber}}  
Address: {{address}}  

Considering my consistent repayment record and the current market lending rates, I kindly request you to reassess my loan terms and reduce the applicable interest rate. A favorable adjustment would greatly support my repayment capacity and strengthen my relationship with your bank.  

I would appreciate your earliest consideration and a written response regarding this request.  

Thank you for your assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`
  }
},
  {
  id: "loan-payoff-request",
  title: "Loan Payoff Request Letter",
  description: "Request for final payoff amount and closure of loan account",
  category: "Banking",
  fields: [
    { id: "date", label: "Date", type: "date", placeholder: "", required: true },
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { id: "address", label: "Address", type: "textarea", placeholder: "Your complete address", required: true },
    { id: "loanAccountNumber", label: "Loan Account Number", type: "text", placeholder: "Your loan account number", required: true },
    { id: "branchName", label: "Branch Name", type: "text", placeholder: "Your branch name", required: true },
    { id: "ph", label: "Phone Number", type: "text", placeholder: "Your contact number", required: false }
  ],
  templates: {
    US: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  
  

Subject: Request for Loan Payoff and Closure  

Dear Sir/Madam,  

I am writing to formally request the payoff details for my loan account with your branch.
Please provide me with the final outstanding balance, including any accrued interest and applicable charges, to facilitate complete repayment.  

Loan Account Holder Name: {{name}}  
Loan Account Number: {{loanAccountNumber}}  
Address: {{address}}  

Upon confirmation of the payoff amount, I will arrange immediate settlement. Kindly provide a loan closure confirmation and issue a No Objection Certificate (NOC) once the loan is fully repaid.  

Thank you for your prompt assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    UK: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  

Subject: Request for Loan Payoff and Closure  

Dear Sir/Madam,  

I am writing to formally request the payoff details for my loan account with your branch. Please provide me with the final outstanding balance, including any accrued interest and applicable charges, to facilitate complete repayment.  

Loan Account Holder Name: {{name}}  
Loan Account Number: {{loanAccountNumber}}  
Address: {{address}}  

Upon confirmation of the payoff amount, I will arrange immediate settlement. Kindly provide a loan closure confirmation and issue a No Objection Certificate (NOC) once the loan is fully repaid.  

Thank you for your prompt assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    INDIA: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  

Subject: Request for Loan Payoff and Closure  

Respected Sir/Madam,  

I am writing to formally request the payoff details for my loan account with your branch. Please provide me with the final outstanding balance, including any accrued interest and applicable charges, to facilitate complete repayment.  

Loan Account Holder Name: {{name}}  
Loan Account Number: {{loanAccountNumber}}  
Address: {{address}}  

Upon confirmation of the payoff amount, I will arrange immediate settlement. Kindly provide a loan closure confirmation and issue a No Objection Certificate (NOC) once the loan is fully repaid.  

Thank you for your prompt assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`
  }
},
  {
  id: "standing-instruction-cancellation",
  title: "Standing Instruction Cancellation Request",
  description: "Request to cancel a standing instruction linked to your bank account",
  category: "Banking",
  fields: [
    { id: "date", label: "Date", type: "date", placeholder: "", required: true },
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { id: "address", label: "Address", type: "textarea", placeholder: "Your complete address", required: true },
    { id: "accountNumber", label: "Account Number", type: "text", placeholder: "Your account number", required: true },
    { id: "instructionDetails", label: "Standing Instruction Details", type: "textarea", placeholder: "Provide details of the standing instruction (e.g., payment to XYZ every month)", required: true },
    { id: "branchName", label: "Branch Name", type: "text", placeholder: "Your branch name", required: true },
    { id: "ph", label: "Phone Number", type: "text", placeholder: "Your contact number", required: false }
  ],
  templates: {
    US: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  


Subject: Request to Cancel Standing Instruction  

Dear Sir/Madam,  

I am writing to request the cancellation of the following standing instruction linked to my bank account:  

Account Holder Name: {{name}}  
Account Number: {{accountNumber}}  
Address: {{address}}  

Standing Instruction Details: {{instructionDetails}}  

Kindly stop this instruction with immediate effect and confirm the cancellation in writing. Please ensure that no further deductions or transfers are processed under this instruction.  

Thank you for your assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    UK: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  

Subject: Request to Cancel Standing Instruction  

Dear Sir/Madam,  

I am writing to request the cancellation of the following standing instruction linked to my bank account:  

Account Holder Name: {{name}}  
Account Number: {{accountNumber}}  
Address: {{address}}  

Standing Instruction Details: {{instructionDetails}}  

Kindly stop this instruction with immediate effect and confirm the cancellation in writing. Please ensure that no further deductions or transfers are processed under this instruction.  

Thank you for your assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`,

    INDIA: `Date: {{date}}

To,  
The Branch Manager  
{{branchName}}  

Subject: Request to Cancel Standing Instruction  

Respected Sir/Madam,  

I am writing to request the cancellation of the following standing instruction linked to my bank account:  

Account Holder Name: {{name}}  
Account Number: {{accountNumber}}  
Address: {{address}}  

Standing Instruction Details: {{instructionDetails}}  

Kindly stop this instruction with immediate effect and confirm the cancellation in writing. Please ensure that no further deductions or transfers are processed under this instruction.  

Thank you for your assistance.  

Yours faithfully,  
{{name}}  

Signature: _______________  
Date: {{date}}`
  }
},
  {
  id: "atm-card-replacement",
  title: "ATM/Debit Card Replacement Request",
  description: "Request for issuing a replacement ATM/Debit card due to loss, damage, or malfunction",
  category: "Banking",
  fields: [
    { id: "date", label: "Date", type: "date", placeholder: "", required: true },
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { id: "address", label: "Address", type: "textarea", placeholder: "Your complete address", required: true },
    { id: "accountNumber", label: "Account Number", type: "text", placeholder: "Your account number", required: true },
    { id: "cardNumber", label: "ATM/Debit Card Number (last 4 digits)", type: "text", placeholder: "XXXX", required: false },
    { id: "branchName", label: "Branch Name", type: "text", placeholder: "Your branch name", required: true },
    { id: "reason", label: "Reason for Replacement", type: "text", placeholder: "Lost, damaged, stolen, etc.", required: false },
    { id: "ph", label: "Phone Number", type: "text", placeholder: "Your contact number", required: false }
  ],
  templates: {
    US: `Date: {{date}}

To,
The Branch Manager
{{branchName}}


Subject: Request for ATM/Debit Card Replacement

Dear Sir/Madam,

I am writing to request the issuance of a replacement ATM/Debit card linked to my account. The details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}
Address: {{address}}
{{#if cardNumber}}Existing Card Number (Last 4 digits): {{cardNumber}}{{/if}}

{{#if reason}}Reason for Replacement: {{reason}}{{/if}}

Kindly block my existing card (if applicable) and issue me a new ATM/Debit card at the earliest. Please notify me once the replacement is processed.

Thank you for your assistance.

Yours faithfully,  
{{name}}

Signature: _______________  
Date: {{date}}`,

    UK: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for ATM/Debit Card Replacement

Dear Sir/Madam,

I am writing to request the issuance of a replacement ATM/Debit card linked to my account. The details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}
Address: {{address}}
{{#if cardNumber}}Existing Card Number (Last 4 digits): {{cardNumber}}{{/if}}

{{#if reason}}Reason for Replacement: {{reason}}{{/if}}

Kindly block my existing card (if applicable) and issue me a new ATM/Debit card at the earliest. Please notify me once the replacement is processed.

Thank you for your assistance.

Yours faithfully,  
{{name}}

Signature: _______________  
Date: {{date}}`,

    INDIA: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for ATM/Debit Card Replacement

Dear Sir/Madam,

I am writing to request the issuance of a replacement ATM/Debit card linked to my account. The details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}
Address: {{address}}
{{#if cardNumber}}Existing Card Number (Last 4 digits): {{cardNumber}}{{/if}}

{{#if reason}}Reason for Replacement: {{reason}}{{/if}}

Kindly block my existing card (if applicable) and issue me a new ATM/Debit card at the earliest. Please notify me once the replacement is processed.

Thank you for your assistance.

Yours faithfully,  
{{name}}

Signature: _______________  
Date: {{date}}`
  }
},


{
  id: "fixed-deposit-closure",
  title: "Fixed Deposit Closure Request",
  description: "Request to close your Fixed Deposit account before or after maturity",
  category: "Banking",
  fields: [
    { id: "date", label: "Date", type: "date", placeholder: "", required: true },
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { id: "address", label: "Address", type: "textarea", placeholder: "Your complete address", required: true },
    { id: "fdNumber", label: "Fixed Deposit Number", type: "text", placeholder: "Your FD number", required: true },
    { id: "branchName", label: "Branch Name", type: "text", placeholder: "Your branch name", required: true },
    { id: "maturityDate", label: "Maturity Date", type: "date", placeholder: "", required: false },
    { id: "reason", label: "Reason for Closure", type: "text", placeholder: "Reason for closing FD (optional)", required: false },
    { id: "ph", label: "Phone Number", type: "text", placeholder: "Your contact number", required: false }
  ],
  templates: {
    US: `Date: {{date}}

To,
The Branch Manager
{{branchName}}


Subject: Request for Fixed Deposit Closure

Dear Sir/Madam,

I am writing to request the closure of my Fixed Deposit account maintained with your branch. Below are the details:

Account Holder Name: {{name}}
Fixed Deposit Number: {{fdNumber}}
Address: {{address}}
{{#if maturityDate}}Maturity Date: {{maturityDate}}{{/if}}

{{#if reason}}Reason for Closure: {{reason}}{{/if}}

Kindly arrange to close the above-mentioned Fixed Deposit and transfer the maturity proceeds (after applicable deductions, if any) to my linked savings account or issue a demand draft/cheque as per bank norms.

Please confirm once the closure has been processed.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,

    UK: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Fixed Deposit Closure

Dear Sir/Madam,

I am writing to request the closure of my Fixed Deposit account maintained with your branch. Below are the details:

Account Holder Name: {{name}}
Fixed Deposit Number: {{fdNumber}}
Address: {{address}}
{{#if maturityDate}}Maturity Date: {{maturityDate}}{{/if}}

{{#if reason}}Reason for Closure: {{reason}}{{/if}}

Kindly arrange to close the above-mentioned Fixed Deposit and transfer the maturity proceeds (after applicable deductions, if any) to my linked savings account or issue a cheque as per bank norms.

Please confirm once the closure has been processed.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,

    INDIA: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Fixed Deposit Closure

Dear Sir/Madam,

I am writing to request the closure of my Fixed Deposit account maintained with your branch. Below are the details:

Account Holder Name: {{name}}
Fixed Deposit Number: {{fdNumber}}
Address: {{address}}
{{#if maturityDate}}Maturity Date: {{maturityDate}}{{/if}}

{{#if reason}}Reason for Closure: {{reason}}{{/if}}

Kindly arrange to close the above-mentioned Fixed Deposit and transfer the maturity proceeds (after applicable deductions, if any) to my linked savings account or issue a demand draft/cheque as per bank norms.

Please confirm once the closure has been processed.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`
  }
},


  {
    id: 'bank-account-closure',
    title: 'Bank Account Closure Request',
    description: 'Request to close your bank account permanently',
    category: 'Banking',
    fields: [
      { id: 'date', label: 'Date', type: 'date', placeholder: '', required: true },
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
      { id: 'address', label: 'Address', type: 'textarea', placeholder: 'Your complete address', required: true },
      { id: 'accountNumber', label: 'Account Number', type: 'text', placeholder: 'Your account number', required: true },
      { id: 'branchName', label: 'Branch Name', type: 'text', placeholder: 'Your branch name', required: true },
      { id: 'reason', label: 'Reason for Closure', type: 'text', placeholder: 'Reason for closing account', required: false },
            { id: 'ph', label: 'phone for Closure', type: 'text', placeholder: 'Reason for closing account', required: false },

    ],
    templates: {
      US: `Date: {{date}}

To,
The Branch Manager
{{branchName}}


Subject: Request for Bank Account Closure

Dear Sir/Madam,

I am writing to formally request the closure of my bank account held with your branch. Below are my account details:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}
Address: {{address}}

{{#if reason}}Reason for Closure: {{reason}}{{/if}}

I understand that upon closure, any remaining balance will be transferred to me via demand draft or cheque after deducting applicable charges. I also acknowledge that all linked services (cards, online banking, etc.) will be terminated.

Please process this request at your earliest convenience and confirm the closure in writing.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
          UK: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Bank Account Closure

Dear Sir/Madam,

I am writing to formally request the closure of my bank account held with your branch. Below are my account details:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}
Address: {{address}}

{{#if reason}}Reason for Closure: {{reason}}{{/if}}

I understand that upon closure, any remaining balance will be transferred to me via demand draft or cheque after deducting applicable charges. I also acknowledge that all linked services (cards, online banking, etc.) will be terminated.

Please process this request at your earliest convenience and confirm the closure in writing.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
          INDIA: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Bank Account Closure

Dear Sir/Madam,

I am writing to formally request the closure of my bank account held with your branch. Below are my account details:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}
Address: {{address}}

{{#if reason}}Reason for Closure: {{reason}}{{/if}}

I understand that upon closure, any remaining balance will be transferred to me via demand draft or cheque after deducting applicable charges. I also acknowledge that all linked services (cards, online banking, etc.) will be terminated.

Please process this request at your earliest convenience and confirm the closure in writing.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`
    }
  },
  {
    id: 'address-change',
    title: 'Address Change Request',
    description: 'Update your address in bank records',
    category: 'Banking',
    fields: [
      { id: 'date', label: 'Date', type: 'date', placeholder: '', required: true },
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
      { id: 'accountNumber', label: 'Account Number', type: 'text', placeholder: 'Your account number', required: true },
      { id: 'oldAddress', label: 'Current Address', type: 'textarea', placeholder: 'Your current address on record', required: true },
      { id: 'newAddress', label: 'New Address', type: 'textarea', placeholder: 'Your new address', required: true },
      { id: 'branchName', label: 'Branch Name', type: 'text', placeholder: 'Your branch name', required: true },
    ],
    templates: {
      US: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Change of Address

Dear Sir/Madam,

I am writing to request an update to my address in your bank records. My account details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

Current Address on Record:
{{oldAddress}}

New Address:
{{newAddress}}

I request you to update my address in all your records and correspondence. I am attaching the required address proof documents as per your bank's policy.

Please confirm the address change in writing once completed.

Thank you for your prompt attention to this matter.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
      UK: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Change of Address

Dear Sir/Madam,

I am writing to request an update to my address in your bank records. My account details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

Current Address on Record:
{{oldAddress}}

New Address:
{{newAddress}}

I request you to update my address in all your records and correspondence. I am attaching the required address proof documents as per your bank's policy.

Please confirm the address change in writing once completed.

Thank you for your prompt attention to this matter.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
      INDIA: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Change of Address

Dear Sir/Madam,

I am writing to request an update to my address in your bank records. My account details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

Current Address on Record:
{{oldAddress}}

New Address:
{{newAddress}}

I request you to update my address in all your records and correspondence. I am attaching the required address proof documents as per your bank's policy.

Please confirm the address change in writing once completed.

Thank you for your prompt attention to this matter.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`
    }
  },
  {
    id: 'cheque-book-request',
    title: 'Cheque Book Request',
    description: 'Request a new cheque book for your account',
    category: 'Banking',
    fields: [
      { id: 'date', label: 'Date', type: 'date', placeholder: '', required: true },
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
      { id: 'accountNumber', label: 'Account Number', type: 'text', placeholder: 'Your account number', required: true },
      { id: 'branchName', label: 'Branch Name', type: 'text', placeholder: 'Your branch name', required: true },
      { id: 'chequeType', label: 'Cheque Type', type: 'text', placeholder: 'e.g., Bearer, Account Payee', required: false },
      { id: 'pages', label: 'Number of Pages', type: 'text', placeholder: 'e.g., 25, 50, 100', required: false },
    ],
    templates: {
      US: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for New Cheque Book

Dear Sir/Madam,

I would like to request a new cheque book for my account. My details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

{{#if chequeType}}Cheque Type Required: {{chequeType}}{{/if}}
{{#if pages}}Number of Pages: {{pages}}{{/if}}

Please issue the cheque book and inform me once it is ready for collection. I am willing to pay the applicable charges as per your bank's policy.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
      UK: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for New Cheque Book

Dear Sir/Madam,

I would like to request a new cheque book for my account. My details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

{{#if chequeType}}Cheque Type Required: {{chequeType}}{{/if}}
{{#if pages}}Number of Pages: {{pages}}{{/if}}

Please issue the cheque book and inform me once it is ready for collection. I am willing to pay the applicable charges as per your bank's policy.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
      INDIA: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for New Cheque Book

Respected Sir/Madam,

I would like to request a new cheque book for my account. My details are as follows:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

{{#if chequeType}}Cheque Type Required: {{chequeType}}{{/if}}
{{#if pages}}Number of Pages: {{pages}}{{/if}}

Please issue the cheque book and inform me once it is ready for collection. I am willing to pay the applicable charges as per your bank's policy.

Thank you for your assistance.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`
    }
  },
  {
    id: 'bank-statement-request',
    title: 'Bank Statement Request',
    description: 'Request bank statements for specific periods',
    category: 'Banking',
    fields: [
      { id: 'date', label: 'Date', type: 'date', placeholder: '', required: true },
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
      { id: 'accountNumber', label: 'Account Number', type: 'text', placeholder: 'Your account number', required: true },
      { id: 'branchName', label: 'Branch Name', type: 'text', placeholder: 'Your branch name', required: true },
      { id: 'fromDate', label: 'From Date', type: 'date', placeholder: '', required: true },
      { id: 'toDate', label: 'To Date', type: 'date', placeholder: '', required: true },
      { id: 'purpose', label: 'Purpose', type: 'text', placeholder: 'Reason for statement request', required: false },
    ],
    templates: {
      US: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Bank Statement

Dear Sir/Madam,

I am writing to request a bank statement for my account. Please find my details below:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

Statement Period Required:
From: {{fromDate}}
To: {{toDate}}

{{#if purpose}}Purpose: {{purpose}}{{/if}}

Please provide the statement in hard copy format. I am willing to pay the applicable charges as per your bank's policy.

Kindly process this request at your earliest convenience.

Thank you for your cooperation.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
      UK: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Bank Statement

Dear Sir/Madam,

I am writing to request a bank statement for my account. Please find my details below:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

Statement Period Required:
From: {{fromDate}}
To: {{toDate}}

{{#if purpose}}Purpose: {{purpose}}{{/if}}

Please provide the statement in hard copy format. I am willing to pay the applicable charges as per your bank's policy.

Kindly process this request at your earliest convenience.

Thank you for your cooperation.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`,
      INDIA: `Date: {{date}}

To,
The Branch Manager
{{branchName}}

Subject: Request for Bank Statement

Dear Sir/Madam,

I am writing to request a bank statement for my account. Please find my details below:

Account Holder Name: {{name}}
Account Number: {{accountNumber}}

Statement Period Required:
From: {{fromDate}}
To: {{toDate}}

{{#if purpose}}Purpose: {{purpose}}{{/if}}

Please provide the statement in hard copy format. I am willing to pay the applicable charges as per your bank's policy.

Kindly process this request at your earliest convenience.

Thank you for your cooperation.

Yours faithfully,
{{name}}

Signature: _______________
Date: {{date}}`
    }
  }
];

export const getLetterById = (id: string): LetterTemplate | undefined => {
  return letterTemplates.find(letter => letter.id === id);
};

export const searchLetters = (query: string): LetterTemplate[] => {
  if (!query.trim()) return letterTemplates;
  
  const lowercaseQuery = query.toLowerCase();
  return letterTemplates.filter(letter => {
    // Search in title, description, category
    const basicMatch = letter.title.toLowerCase().includes(lowercaseQuery) ||
      letter.description.toLowerCase().includes(lowercaseQuery) ||
      letter.category.toLowerCase().includes(lowercaseQuery);
    
    // Search in field labels and placeholders
    const fieldMatch = letter.fields.some(field => 
      field.label.toLowerCase().includes(lowercaseQuery) ||
      field.placeholder?.toLowerCase().includes(lowercaseQuery)
    );
    
    // Search in template content
    const templateMatch = Object.values(letter.templates).some(template =>
      template.toLowerCase().includes(lowercaseQuery)
    );
    
    return basicMatch || fieldMatch || templateMatch;
  });
};

export const getSearchSuggestions = (query: string): string[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  const suggestions = new Set<string>();
  
  letterTemplates.forEach(letter => {
    // Add title matches
    if (letter.title.toLowerCase().includes(lowercaseQuery)) {
      suggestions.add(letter.title);
    }
    
    // Add category matches
    if (letter.category.toLowerCase().includes(lowercaseQuery)) {
      suggestions.add(letter.category);
    }
    
    // Add field label matches
    letter.fields.forEach(field => {
      if (field.label.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(field.label);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 5); // Limit to 5 suggestions
};