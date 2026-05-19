import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryNav = () => {
  const links = [
    { icon: '🎥', label: 'Movies', path: '/' },
    { icon: '🔴', label: 'Stream', path: '/stream' },
    { icon: '🗓️', label: 'Events', path: '/events' },
    { icon: '🏌️', label: 'Sports', path: '/sports' },
    { icon: '💰', label: 'Offers', path: '/offers' },
    { icon: '🎁', label: 'Gift Cards', path: '/gift' }
  ];

  return (
    <div className='bg-white border-b shadow-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex gap-1 overflow-x-auto'>
          {links.map(link => (
            <Link 
              key={link.label} 
              to={link.path} 
              className='flex items-center gap-1.5 px-5 py-3.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 whitespace-nowrap transition border-b-2 border-transparent hover:border-red-500'
            >
              <span>{link.icon}</span> {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;