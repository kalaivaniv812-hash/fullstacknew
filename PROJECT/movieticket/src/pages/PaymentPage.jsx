import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, selectedDate, selectedTime, selectedSeats, totalPrice } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('🎉 Payment Successful! Your tickets have been booked. Check your email for confirmation.');
      navigate('/');
    }, 2000);
  };

  if (!movie) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>No booking data found</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
          <div className='bg-gradient-to-r from-red-600 to-red-700 p-6 text-white'>
            <h2 className='text-2xl font-bold'>Payment Details</h2>
            <p className='text-red-100'>Complete your booking to confirm tickets</p>
          </div>
          
          <div className='p-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              {/* Booking Summary */}
              <div className='bg-gray-50 rounded-xl p-4'>
                <h3 className='font-bold text-lg mb-4'>Booking Summary</h3>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Movie:</span>
                    <span className='font-semibold'>{movie.title}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Date & Time:</span>
                    <span className='font-semibold'>{selectedDate} · {selectedTime}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Seats:</span>
                    <span className='font-semibold'>{selectedSeats?.map(s => s.id).join(', ')}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Quantity:</span>
                    <span className='font-semibold'>{selectedSeats?.length}</span>
                  </div>
                  <div className='border-t pt-3 mt-3'>
                    <div className='flex justify-between text-lg font-bold'>
                      <span>Total Amount:</span>
                      <span className='text-red-600'>₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Options */}
              <div>
                <h3 className='font-bold text-lg mb-4'>Select Payment Method</h3>
                <div className='space-y-3'>
                  {[
                    { id: 'card', icon: 'fa-credit-card', label: 'Credit / Debit Card' },
                    { id: 'upi', icon: 'fa-mobile-alt', label: 'UPI / GPay / PhonePe' },
                    { id: 'netbanking', icon: 'fa-university', label: 'Net Banking' }
                  ].map(method => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition ${
                        paymentMethod === method.id ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <input
                        type='radio'
                        name='payment'
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className='text-red-600'
                      />
                      <i className={`fas ${method.icon} text-xl ${paymentMethod === method.id ? 'text-red-600' : 'text-gray-400'}`}></i>
                      <span className='flex-1'>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Card Details */}
            {paymentMethod === 'card' && (
              <div className='mt-6 p-4 bg-gray-50 rounded-xl'>
                <div className='grid gap-3'>
                  <input type='text' placeholder='Card Number' className='p-3 border rounded-lg' />
                  <div className='grid grid-cols-2 gap-3'>
                    <input type='text' placeholder='MM/YY' className='p-3 border rounded-lg' />
                    <input type='text' placeholder='CVV' className='p-3 border rounded-lg' />
                  </div>
                  <input type='text' placeholder='Cardholder Name' className='p-3 border rounded-lg' />
                </div>
              </div>
            )}
            
            {/* UPI Details */}
            {paymentMethod === 'upi' && (
              <div className='mt-6 p-4 bg-gray-50 rounded-xl'>
                <input type='text' placeholder='Enter UPI ID (e.g., name@okhdfcbank)' className='w-full p-3 border rounded-lg' />
              </div>
            )}
            
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full mt-6 transition disabled:opacity-50'
            >
              {isProcessing ? 'Processing...' : `Pay ₹${totalPrice}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;