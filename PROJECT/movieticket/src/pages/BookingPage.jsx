import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie || movies[0];
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [ticketCount, setTicketCount] = useState(2);

  const dates = ['Today', 'Tomorrow', 'Fri, 15 Nov', 'Sat, 16 Nov', 'Sun, 17 Nov'];
  const times = ['10:00 AM', '1:15 PM', '4:45 PM', '7:30 PM', '10:15 PM'];

  const handleProceed = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time');
      return;
    }
    navigate('/seats', { state: { movie, selectedDate, selectedTime, ticketCount } });
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-wrap gap-6'>
          {/* Movie Info Card */}
          <div className='w-80 shrink-0'>
            <div className='bg-white rounded-2xl overflow-hidden shadow-lg sticky top-28'>
              <img src={movie.image} alt={movie.title} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h3 className='font-bold text-lg'>{movie.title}</h3>
                <p className='text-gray-500 text-sm'>{movie.genre} · {movie.duration}</p>
                <p className='text-gray-500 text-sm mt-2'>⭐ {movie.rating}/5</p>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className='flex-1'>
            <div className='bg-white rounded-2xl shadow-lg p-6'>
              <h2 className='text-2xl font-bold mb-6'>Select Date & Time</h2>
              
              <div className='mb-6'>
                <label className='block font-semibold mb-3'>Select Date</label>
                <div className='flex gap-3 flex-wrap'>
                  {dates.map(date => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-5 py-2 rounded-full border transition ${
                        selectedDate === date 
                          ? 'bg-red-600 text-white border-red-600' 
                          : 'border-gray-300 hover:border-red-400'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className='mb-6'>
                <label className='block font-semibold mb-3'>Select Time</label>
                <div className='flex gap-3 flex-wrap'>
                  {times.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-5 py-2 rounded-full border transition ${
                        selectedTime === time 
                          ? 'bg-red-600 text-white border-red-600' 
                          : 'border-gray-300 hover:border-red-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className='mb-6'>
                <label className='block font-semibold mb-3'>Number of Tickets</label>
                <input
                  type='number'
                  min='1'
                  max='10'
                  value={ticketCount}
                  onChange={(e) => setTicketCount(parseInt(e.target.value))}
                  className='w-32 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400'
                />
              </div>
              
              <div className='border-t pt-6'>
                <div className='flex justify-between mb-3'>
                  <span className='text-gray-600'>Base Price</span>
                  <span>₹{movie.price * ticketCount}</span>
                </div>
                <div className='flex justify-between mb-3'>
                  <span className='text-gray-600'>Taxes & Fees (18%)</span>
                  <span>₹{Math.round(movie.price * ticketCount * 0.18)}</span>
                </div>
                <div className='flex justify-between text-xl font-bold'>
                  <span>Total Amount</span>
                  <span className='text-red-600'>₹{Math.round(movie.price * ticketCount * 1.18)}</span>
                </div>
              </div>
              
              <button
                onClick={handleProceed}
                className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full mt-6 transition'
              >
                Continue to Seat Selection →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;