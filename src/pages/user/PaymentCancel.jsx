import {  CircleX } from 'lucide-react'
import React from 'react'

const PaymentCancel = () => {
  return (
    <main className="flex items-center container mx-auto justify-center px-auto min-h-96">
      <section className="food-card mx-2 shadow-lg rounded-lg p-8 max-w-lg mx-auto text-center">
        <div className="mb-6">
          <CircleX className="mx-auto h-16 w-16 text-red-500" /> 
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Payment Cancelled!
        </h2>
        <p className="text-sm mb-6">
          Your payment has been successfully Cancelled.
        </p>
      </section>
    </main>
  )
}

export default PaymentCancel
