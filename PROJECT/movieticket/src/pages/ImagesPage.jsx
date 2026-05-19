import React from 'react';
import { galleryImages } from '../data/movies';

const ImagesPage = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold mb-2'>Movie Gallery 📸</h2>
          <p className='text-gray-500'>Exclusive stills from your favorite movies</p>
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {galleryImages.map((img, idx) => (
            <div key={idx} className='group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-1'>
              <img src={img} alt={`Gallery ${idx + 1}`} className='w-full h-64 object-cover group-hover:scale-105 transition duration-500' />
              <div className='bg-white p-3 text-center'>
                <p className='text-sm font-medium text-gray-700'>Scene {idx + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesPage;