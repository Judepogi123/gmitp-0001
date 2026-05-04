import { Module, Role, Workflow } from './types';

export const modules: Module[] = [
  {
    id: 'budget',
    title: 'Budget Management',
    description: 'Annual budget preparation, appropriation control, allotment tracking',
    icon: 'LayoutGrid',
    color: 'bg-blue-50 dark:bg-blue-900/20',
    dotColor: 'bg-blue-500',
    count: '12 sub-modules',
    features: [
      'Annual Investment Plan (AIP)',
      'Budget Preparation (PPMP/APP)',
      'Appropriation Register',
      'Allotment Release (SARO/GARO)',
      'Obligation Request (ObR)',
      'Budget utilization monitoring',
      'Budget vs actual variance',
      'Supplemental budget tracking',
      'Special purpose fund budgets',
      'Trust fund budget control',
      'Budget ceiling management',
      'Program/project/activity tagging',
    ]
  },
  {
    id: 'revenue',
    title: 'Revenue & Collection',
    description: 'Tax billing, collection, official receipts, remittance tracking',
    icon: 'Banknote',
    color: 'bg-green-50 dark:bg-green-900/20',
    dotColor: 'bg-green-500',
    count: '9 sub-modules',
    features: [
      'Real property tax billing',
      'Business permit billing',
      'Fees & charges management',
      'Official Receipt (OR) issuance',
      'Collection registers (RCD)',
      'Cashier deposit slips',
      'Revenue Classification (RA/TA)',
      'Tax delinquency monitoring',
      'Inter-agency remittances',
    ]
  },
  {
    id: 'disbursement',
    title: 'Disbursement & Payables',
    description: 'Voucher processing, checks, wire transfers, payable ledger',
    icon: 'ExternalLink',
    color: 'bg-amber-50 dark:bg-amber-900/20',
    dotColor: 'bg-amber-500',
    count: '11 sub-modules',
    features: [
      'Disbursement Voucher (DV)',
      'Check Disbursement Register',
      'Accounts Payable Ledger',
      'Creditors subsidiary ledger',
      'Payroll processing (PS/MOOE)',
      'Cash Advance issuance',
      'Liquidation of cash advances',
      'Fund transfers (RA/LGSF)',
      'Withholding tax management',
      'Payment scheduling',
      'Vendor management',
    ]
  },
  {
    id: 'ledger',
    title: 'General Ledger',
    description: 'Chart of accounts, journal entries, subsidiary ledgers',
    icon: 'BookText',
    color: 'bg-teal-50 dark:bg-teal-900/20',
    dotColor: 'bg-teal-500',
    count: '8 sub-modules',
    features: [
      'New Government COA (NGCOA)',
      'Journal Entry Vouchers (JEV)',
      'General Journal',
      'General Ledger posting',
      'Subsidiary Ledgers',
      'Trial Balance generation',
      'Reversing entries',
      'Adjusting entries (AJE)',
    ]
  },
  {
    id: 'procurement',
    title: 'Procurement & BAC',
    description: 'Purchase requests, canvassing, PO/contract management',
    icon: 'ShoppingCart',
    color: 'bg-rose-50 dark:bg-rose-900/20',
    dotColor: 'bg-rose-500',
    count: '10 sub-modules',
    features: [
      'Purchase Request (PR)',
      'Request for Quotation (RFQ)',
      'Abstract of Canvass',
      'Purchase Order (PO)',
      'Contract management',
      'Inspection and acceptance (IAR)',
      'Supplier accreditation',
      'PhilGEPS integration',
      'BAC resolution tracking',
      'Warranty & performance bonds',
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll & HR Finance',
    description: 'Salary computation, deductions, remittances, payslips',
    icon: 'Users',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    dotColor: 'bg-purple-500',
    count: '8 sub-modules',
    features: [
      'Plantilla management',
      'Salary computation (GSIS/PhilHealth/Pag-IBIG)',
      'Payroll Register (PR)',
      'Payslip generation',
      'GSIS/PhilHealth/Pag-IBIG remittance',
      'BIR 1601-C withholding',
      'SALN linking',
      'Leave monetization',
    ]
  },
  {
    id: 'assets',
    title: 'Property & Assets',
    description: 'Fixed asset registry, depreciation, inventory, disposal',
    icon: 'Building2',
    color: 'bg-sky-50 dark:bg-sky-900/20',
    dotColor: 'bg-sky-500',
    count: '7 sub-modules',
    features: [
      'Property Plant & Equipment (PPE) register',
      'Depreciation computation',
      'Inventory custodianship records',
      'Property Transfer Report',
      'Waste Material Report',
      'Disposal/auction tracking',
      'Semi-expendable property',
    ]
  },
  {
    id: 'bankaccounts',
    title: 'Cash & Bank',
    description: 'Bank reconciliation, trust accounts, cash management',
    icon: 'Library',
    color: 'bg-emerald-50 dark:bg-emerald-900/20',
    dotColor: 'bg-emerald-500',
    count: '6 sub-modules',
    features: [
      'Bank account registry',
      'Bank Reconciliation Statement (BRS)',
      'Trust Receipts & Disbursements',
      'Petty Cash Fund (PCF)',
      'Cash position monitoring',
      'Inter-fund transfers',
    ]
  },
  {
    id: 'audit',
    title: 'COA Audit Support',
    description: 'Audit trail, document transmittal, COA interface reports',
    icon: 'Search',
    color: 'bg-orange-50 dark:bg-orange-900/20',
    dotColor: 'bg-orange-500',
    count: '6 sub-modules',
    features: [
      'Audit trail log (all transactions)',
      'Document transmittal tracking',
      'Notice of Disallowance (ND)',
      'Notice of Charge (NC)',
      'COA Annual Audit Report linkage',
      'Audit observation monitoring',
    ]
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    description: 'Financial statements, dashboards, BIR, BLGF, DBM submissions',
    icon: 'BarChart3',
    color: 'bg-cyan-50 dark:bg-cyan-900/20',
    dotColor: 'bg-cyan-500',
    count: '24 report types',
    features: [
      'Statement of Financial Position',
      'Statement of Financial Performance',
      'Statement of Cash Flows',
      'Notes to Financial Statements',
      'Budget & Financial Accountability Reports (BFARs)',
      'Statement of Receipts & Expenditures (SRE)',
      'BLGF Monthly Report',
      'BIR Alphalist',
      'Executive dashboard',
      'Fund utilization analytics',
    ]
  },
];

export const roles: Role[] = [
  { name: 'Municipal Accountant', access: 'Full module access, approves JEVs, signs financial statements', color: '#0C447C' },
  { name: 'Municipal Treasurer', access: 'Revenue, collection, cash & bank, disbursement approval', color: '#0F6E56' },
  { name: 'Budget Officer', access: 'Budget module, appropriation, allotment, obligation requests', color: '#854F0B' },
  { name: 'Cashier', access: 'OR issuance, collections, deposits, cash advance liquidation', color: '#3C3489' },
  { name: 'Bookkeeper', access: 'JEV entry, subsidiary ledgers, bank recon, payable tracking', color: '#993C1D' },
  { name: 'BAC Secretariat', access: 'Procurement module, supplier records, PO/contracts', color: '#3B6D11' },
  { name: 'HRMO Finance', access: 'Payroll module, GSIS/Pag-IBIG/PhilHealth remittance', color: '#71243E' },
  { name: 'Mayor / Approver', access: 'Read-only dashboards, approvals, executive reports', color: '#5F5E5A' },
];

export const workflows: Workflow[] = [
  {
    title: 'Budget → Expenditure Cycle',
    steps: ['AIP / Budget Preparation', 'Appropriation (Sanggunian)', 'Allotment (SARO/GARO)', 'Obligation (ObR)', 'Disbursement (DV/Check)'],
    label: 'Ensures no expenditure without corresponding allotment and obligation authority'
  },
  {
    title: 'Revenue Collection Cycle',
    steps: ['Assessment / Billing', 'Collection (OR)', 'Cashier Deposit', 'Remittance to LBP', 'Revenue Ledger Update'],
    label: 'All collections posted in real-time to corresponding revenue accounts'
  },
  {
    title: 'Procurement Cycle',
    steps: ['Purchase Request (PR)', 'BAC Review / Canvass', 'PO / Contract', 'Delivery / IAR', 'DV Processing', 'Payment'],
    label: 'Linked to budget obligation; procurement cannot proceed without allotment'
  },
  {
    title: 'Payroll Cycle',
    steps: ['Plantilla / DTR', 'Payroll Computation', 'Payroll Register', 'DV for PS Obligation', 'Bank Crediting', 'Remittance'],
    label: 'Automated computation of mandatory deductions and third-party remittances'
  },
  {
    title: 'Financial Reporting Cycle',
    steps: ['Daily Transactions', 'JEV Posting', 'Trial Balance', 'Adjusting Entries', 'Financial Statements', 'COA Submission'],
    label: 'Monthly cut-off with quarterly and annual BLGF/DBM report generation'
  },
];

export const reportsList = [
  'Statement of Financial Position', 'Statement of Financial Performance', 'Statement of Changes in Net Assets',
  'Statement of Cash Flows', 'Statement of Comparison of Budget & Actual', 'Notes to Financial Statements',
  'Budget & Financial Accountability Reports (BFARs)', 'Statement of Receipts & Expenditures (SRE)',
  'Monthly Report of Disbursements', 'Report on Obligations', 'Report on Allotments',
  'Cash Flow Projection', 'Bank Reconciliation Statement', 'Report of Collections & Deposits',
  'Payroll Register', 'Schedule of Accounts Payable', 'Schedule of Accounts Receivable',
  'PPE Lapsing Schedule', 'Inventory Count Sheet', 'BLGF Monthly Fiscal Report',
  'BIR Form 1601-C', 'BIR Alphalist (1604CF/1604E)', 'GSIS Contribution Report',
  'Executive Dashboard Summary',
];
