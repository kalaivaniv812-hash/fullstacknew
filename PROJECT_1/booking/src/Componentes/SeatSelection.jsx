import React, { useState } from 'react';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const rows = ['A', 'B', 'C', 'D', 'E'];
  const seatsPerRow = 10;

  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">Select Your Seats</h2>
      
      {/* Screen area */}
      <div className="w-full max-w-md h-2 bg-blue-400 shadow-[0_10px_20px_rgba(0,180,255,0.5)] mb-12 rounded-full"></div>
      <p className="text-gray-400 mb-10 text-xs uppercase tracking-widest">All eyes this way</p>

      <div className="grid gap-4">
        {rows.map(row => (
          <div key={row} className="flex gap-2 items-center">
            <span className="w-4 text-gray-400 text-sm">{row}</span>
            {Array.from({ length: seatsPerRow }).map((_, i) => {
              const seatId = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seatId);
              return (
                <button
                  key={seatId}
                  onClick={() => toggleSeat(seatId)}
                  className={`w-8 h-8 rounded-t-lg border-2 text-[10px] flex items-center justify-center transition-all
                    ${isSelected ? 'bg-green-500 border-green-600 text-white' : 'bg-white border-blue-200 hover:border-blue-500 text-gray-500'}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-6 text-sm">
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white border border-gray-300"></div> Available</div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500"></div> Selected</div>
      </div>

      <button className="mt-8 bg-red-500 text-white px-10 py-3 rounded-lg font-bold shadow-lg hover:bg-red-600">
        Pay ₹{selectedSeats.length * 200}
      </button>
    </div>
  );
};

export default SeatSelection;