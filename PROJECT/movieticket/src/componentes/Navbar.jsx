import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-red-700 via-red-600 to-red-700 sticky top-0 z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 py-3'>
        <div className='flex items-center justify-between flex-wrap gap-3'>
          <Link to='/' className='flex items-center gap-2'>
            <i className="fa-solid fa-ticket-alt text-2xl text-white"></i>
            <h1 className='font-black text-2xl text-white'>HK Tickets 🎟️</h1>
          </Link>
          
          <div className='flex-1 max-w-md relative'>
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input 
              type='text' 
              placeholder='Search movies...' 
              className='w-full pl-9 pr-4 py-2 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-400'
            />
          </div>
          
          <div className='flex gap-2'>
            <select className='bg-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer'>
              <option>📍 Chennai</option>
              <option>📍 Mumbai</option>
              <option>📍 Bengaluru</option>
              <option>📍 Delhi</option>
            </select>
            <button className='bg-white text-red-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-red-50 transition'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;