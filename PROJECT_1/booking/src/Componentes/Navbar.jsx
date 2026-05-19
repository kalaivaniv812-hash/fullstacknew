import React from 'react';
import { Search, Menu, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold tracking-tighter text-red-500">HK TICKET</h1>
        <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1 w-96">
          <Search className="text-gray-500 h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search for Movies, Events, Plays and Sports" 
            className="text-black ml-2 outline-none w-full text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <span className="text-sm cursor-pointer hover:text-red-400">Chennai</span>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-sm font-medium transition-all">
          Sign In
        </button>
        <Menu className="md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;