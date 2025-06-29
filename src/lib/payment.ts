// Payment service for handling UGX transactions
// This is a simplified implementation - in production you'd integrate with services like:
// - Flutterwave
// - Paystack
// - MTN Mobile Money
// - Airtel Money

export interface PaymentData {
  amount: number
  currency: string
  course_id: string
  user_id: string
  payment_method: 'card' | 'mobile_money' | 'bank_transfer'
}

export interface PaymentResult {
  success: boolean
  reference?: string
  error?: string
  transaction_id?: string
}

export class PaymentService {
  static async processPayment(paymentData: PaymentData): Promise<PaymentResult> {
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // For demo purposes, randomly succeed or fail
    const success = Math.random() > 0.1 // 90% success rate
    
    if (success) {
      return {
        success: true,
        reference: `PAY_${Date.now()}`,
        transaction_id: `TXN_${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      }
    } else {
      return {
        success: false,
        error: 'Payment failed. Please try again or contact support.'
      }
    }
  }

  static async verifyPayment(reference: string): Promise<boolean> {
    // Simulate payment verification
    await new Promise(resolve => setTimeout(resolve, 1000))
    return true // For demo, always verify as successful
  }

  static formatUGX(amount: number): string {
    return `UGX ${amount.toLocaleString()}`
  }
}

// Mobile Money providers in Uganda
export const MOBILE_MONEY_PROVIDERS = [
  { id: 'mtn', name: 'MTN Mobile Money', prefix: '078' },
  { id: 'airtel', name: 'Airtel Money', prefix: '075' },
  { id: 'utl', name: 'UTL Mobile Money', prefix: '070' }
]

// Supported payment methods
export const PAYMENT_METHODS = [
  {
    id: 'mobile_money',
    name: 'Mobile Money',
    description: 'Pay with MTN, Airtel, or UTL Mobile Money',
    icon: '📱'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Pay with Visa, Mastercard, or local bank cards',
    icon: '💳'
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer',
    description: 'Direct bank transfer to our account',
    icon: '🏦'
  }
]
