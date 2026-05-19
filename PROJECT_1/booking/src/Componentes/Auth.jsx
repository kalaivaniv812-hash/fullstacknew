import React from 'react';

const Auth = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-2xl rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-2">Welcome to HK Ticket</h2>
      <p className="text-gray-500 mb-8">Login to book your favorite movies</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" className="w-full border p-3 rounded-lg outline-red-500" placeholder="name@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full border p-3 rounded-lg outline-red-500" placeholder="••••••••" />
        </div>
        <button className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-all">
          Login
        </button>
      </div>
      <p className="mt-6 text-center text-sm text-gray-600">
        New here? <span className="text-red-500 font-bold cursor-pointer">Create Account</span>
      </p>
    </div>
  );
};

export default Auth;