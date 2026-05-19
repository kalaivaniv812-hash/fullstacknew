import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateSeats } from '../data/movies';

const SeatsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, selectedDate, selectedTime, ticketCount } = location.state || {};
  const [seats, setSeats] = useState(() => generateSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (seat.status === 'booked') return;
    if (selectedSeats.find(s => s.id === seat.id)) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else if (selectedSeats.length < ticketCount) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      alert(`You can only select ${ticketCount} seats!`);
    }
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleProceed = () => {
    if (selectedSeats.length !== ticketCount) {
      alert(`Please select exactly ${ticketCount} seats`);
      return;
    }
    navigate('/payment', { state: { movie, selectedDate, selectedTime, selectedSeats, totalPrice } });
  };

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold mb-2'>Select Your Seats</h2>
          <p className='text-gray-500'>{movie?.title} · {selectedDate} · {selectedTime}</p>
        </div>
        
        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <div className='screen mb-4'></div>
          <div className='text-center text-gray-400 text-sm mb-8'>SCREEN</div>
          
          <div className='overflow-x-auto'>
            {rows.map(row => (
              <div key={row} className='flex justify-center mb-2'>
                <span className='w-10 text-center font-bold text-gray-500'>{row}</span>
                {seats.filter(s => s.row === row).map(seat => (
                  <div
                    key={seat.id}
                    onClick={() => toggleSeat(seat)}
                    className={`seat ${seat.status} ${selectedSeats.find(s => s.id === seat.id) ? 'selected' : ''} ${seat.type === 'vip' ? 'vip' : ''}`}
                  >
                    {seat.number}
                  </div>
                ))}
                <span className='w-10 text-center font-bold text-gray-500'>{row}</span>
              </div>
            ))}
          </div>
          
          <div className='flex justify-center gap-8 mt-8'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-[#2d2442] rounded'></div>
              <span className='text-sm'>Available</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-[#10b981] rounded'></div>
              <span className='text-sm'>Selected</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-gray-400 rounded'></div>
              <span className='text-sm'>Booked</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-gradient-to-r from-amber-500 to-red-500 rounded'></div>
              <span className='text-sm'>VIP (₹350)</span>
            </div>
          </div>
          
          <div className='mt-8 p-4 bg-gray-50 rounded-xl'>
            <div className='flex justify-between items-center flex-wrap gap-4'>
              <div>
                <p className='text-sm text-gray-600'>Selected Seats: {selectedSeats.map(s => s.id).join(', ') || 'None'}</p>
                <p className='text-sm text-gray-600'>Quantity: {selectedSeats.length}/{ticketCount}</p>
              </div>
              <div className='text-right'>
                <p className='text-lg font-bold'>Total: ₹{totalPrice}</p>
                <button
                  onClick={handleProceed}
                  className='bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-2 rounded-full mt-2 transition'
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatsPage;