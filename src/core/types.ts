/**
 * Model Auth
 * 
 */
 export type Auth = {
  id: string
  login: string
  password: string
  status: UserPoolStatus
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ApiKey
 * 
 */
export type ApiKey = {
  id: string
  uid: string
  label: string
  public: string
  private: string
  extras: any
  createdAt: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: string
  type: CustomerType
  firstName: string
  lastName: string
  email: string
  phone: string | null
  extras: any | null
  emailVerified: boolean
  phoneVerified: boolean
  identityVerified: boolean
  uid: string
  createdAt: Date
  updatedAt: Date
  score: number
  referralCode: string
  referrer: string
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: string
  fullName: string
  roleId: string
  uid: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Role
 * 
 */
export type Role = {
  id: string
  alias: string
  rules: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Wallet
 * 
 */
export type Wallet = {
  id: string
  label: string | null
  type: WalletType
  currency: WalletCurrency
  balance: number
  uid: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model WalletOperation
 * 
 */
export type WalletOperation = {
  id: string
  walletId: string
  amount: number
  label: string
  createdAt: Date
}

/**
 * Model SystemWalletOperation
 * 
 */
export type SystemWalletOperation = {
  id: string
  label: string | null
  currency: WalletCurrency
  amount: number
  operatorType: SystemOperatorType
  operatorName: string | null
  systemOperatorId: string | null
  operatorId: string | null
  walletId: string
  historyId: string
  createdAt: Date
}

/**
 * Model WalletTransfer
 * 
 */
export type WalletTransfer = {
  id: string
  label: string | null
  currency: WalletCurrency
  sent: number
  received: number
  tax: number
  system: number
  commission: number
  pricing: any
  senderName: string | null
  receiverName: string | null
  senderId: string
  receiverId: string
  senderHistoryId: string
  receiverHistoryId: string
  createdAt: Date
}

/**
 * Model TransferCommission
 * 
 */
export type TransferCommission = {
  id: string
  amount: number
  currency: string
  walletId: string
  transferId: string
  createdAt: Date
}

/**
 * Model Invoice
 * 
 */
export type Invoice = {
  id: string
  projectId: string | null
  payeeId: string
  payerId: string
  amount: number
  currency: string
  payeeWalletId: string
  label: string
  extras: any | null
  status: InvoiceStatus
  transferId: string | null
  createdAt: Date
  updatedAt: Date | null
  paidAt: Date | null
  cancelledAt: Date | null
}
export type Project = {
  id: string | null,
  label : string,
  createdAt: Date,
  website : string,
  wallet : string,
  webhook : string
}
/**
 * Model Currency
 * 
 */
export type Currency = {
  id: string
  label: string
  currency: string
  networks: { id: string, name: string, code: string }[]
  /**
   * how much numbers at most can be seen after the "."
   */
  floatingPoints: number
  marketAlias: string
  minAmount: number
  maxAmount: number | null
  buyEnabled: boolean
  sellEnabled: boolean
  sell: any
  buy: any
  feesIn: any | null
  feesOut: any | null
  sourceAddress: string | null
  addressRegex: string
  addressPrefix: string
  provider: string
  providerInternalCode: string | null
  /**
   * dictates if the payout is automatically executed or if the transaction must wait for the system admins
   */
  directPayment: boolean
  type: string
  logo: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Exchange
 * 
 */
export type Exchange = {
  id: string
  uid: string
  from: any
  to: any
  amountSent: number
  amountToReceive: number
  appliedRate: any
  senderAddress: string | null
  receiverAddress: string
  status: ExchangeStatus
  createdAt: Date
  updatedAt: Date
  confirmedAt: Date | null
  completedAt: Date | null
  cancelledAt: Date | null
}

/**
 * Model ExchangeTransaction
 * 
 */
export type ExchangeTransaction = {
  id: string
  exchangeId: string
  type: ExchangeTransactionType
  txnId: string
  amount: number
  currency: string
  address: string | null
  extras: any | null
  status: ExchangeTransactionStatus
  createdAt: Date
  updatedAt: Date
  completedAt: Date | null
  cancelledAt: Date | null
}

/**
 * Model OnlineAccount
 * 
 */
export type OnlineAccount = {
  id: string
  data: any
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Setting
 * 
 */
export type Setting = {
  id: string
  data: any
}

/**
 * Model Event
 * 
 */
export type Event = {
  id: string
  data: any
  createdAt: Date
}

/**
 * Model ObjectValidation
 * 
 */
export type ObjectValidation = {
  id: string
  objectId: string | null
  uid: string
  submission: any
  review: any | null
  status: ValidationStatus
  createdAt: Date
  updatedAt: Date | null
  reviewedAt: Date | null
}

/**
 * Model Business
 * 
 */
export type Business = {
  id: string
  label: string
  website: string
  country: string
  ifu: string
  rccm: string | null
  uid: string
  verified: boolean
  createdAt: Date
  updatedAt: Date | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserPoolStatus = {
  active: 'active',
  disabled: 'disabled'
};

export type UserPoolStatus = (typeof UserPoolStatus)[keyof typeof UserPoolStatus]


export const CustomerType = {
  basic: 'basic',
  partner: 'partner'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const WalletType = {
  basic: 'basic',
  business: 'business'
};

export type WalletType = (typeof WalletType)[keyof typeof WalletType]


export const WalletCurrency = {
  IFAXOF: 'IFAXOF',
  IFAUSD: 'IFAUSD'
};

export type WalletCurrency = (typeof WalletCurrency)[keyof typeof WalletCurrency]


export const SystemOperatorType = {
  SYSTEM: 'SYSTEM',
  ADMIN: 'ADMIN'
};

export type SystemOperatorType = (typeof SystemOperatorType)[keyof typeof SystemOperatorType]


export const InvoiceStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const ExchangeStatus = {
  WAITING: 'WAITING',
  CANCELLED: 'CANCELLED',
  CONFIRMED: 'CONFIRMED',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ExchangeStatus = (typeof ExchangeStatus)[keyof typeof ExchangeStatus]


export const ExchangeTransactionType = {
  IN: 'IN',
  OUT: 'OUT'
};

export type ExchangeTransactionType = (typeof ExchangeTransactionType)[keyof typeof ExchangeTransactionType]


export const ExchangeTransactionStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ExchangeTransactionStatus = (typeof ExchangeTransactionStatus)[keyof typeof ExchangeTransactionStatus]


export const ValidationStatus = {
  accepted: 'accepted',
  pending: 'pending',
  rejected: 'rejected'
};

export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus]
