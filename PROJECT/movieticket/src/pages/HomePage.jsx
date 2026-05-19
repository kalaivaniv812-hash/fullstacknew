import React from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import SecondaryNav from '../components/SecondaryNav';

const HomePage = () => {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  };

  return (
    <div>
      <SecondaryNav />
      
      {/* Hero Banner */}
      <div className='bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 py-16 text-center'>
        <div className='max-w-7xl mx-auto px-4'>
          <p className='text-red-400 text-sm uppercase mb-2 tracking-wider'>Now Showing Across India</p>
          <h2 className='text-5xl md:text-6xl font-black text-white mb-3 leading-tight'>
            Book Your Next<br />
            <span className='text-red-400'>Unforgettable</span> Experience
          </h2>
          <p className='text-gray-400 mb-8 max-w-xl mx-auto'>Movies, concerts, sports & more — all in one place</p>
          <div className='flex justify-center gap-4 flex-wrap'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3'>
              <div className='text-2xl font-bold text-red-400'>500+</div>
              <div className='text-sm text-gray-300'>Movies</div>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3'>
              <div className='text-2xl font-bold text-red-400'>200+</div>
              <div className='text-sm text-gray-300'>Events</div>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3'>
              <div className='text-2xl font-bold text-red-400'>50+</div>
              <div className='text-sm text-gray-300'>Venues</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <h3 className='text-xl font-bold mb-6'>Popular Categories</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[['🎬', 'Movies', 'from-red-500 to-rose-600'], ['🎤', 'Concerts', 'from-violet-500 to-purple-700'], ['⚽', 'Sports', 'from-emerald-500 to-green-700'], ['🎭', 'Theater', 'from-amber-500 to-orange-600']].map(([emoji, label, grad]) => (
            <div key={label} className={`bg-gradient-to-br ${grad} rounded-2xl p-5 text-center cursor-pointer hover:scale-105 transition-transform shadow-lg`}>
              <div className='text-3xl mb-1'>{emoji}</div>
              <div className='font-bold text-white text-sm'>{label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Movies Grid */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-bold'>Now Showing</h3>
          <span className='text-sm text-red-600 font-semibold cursor-pointer hover:underline'>View All →</span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {movies.map(movie => (
            <div 
              key={movie.id} 
              onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })} 
              className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1'
            >
              <div className='relative h-64 overflow-hidden'>
                <img src={movie.image} alt={movie.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                <span className='absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full'>{movie.ageRating}</span>
                <span className='absolute bottom-3 left-3 text-yellow-400 text-sm font-bold'>{renderStars(movie.rating)} {movie.rating}</span>
              </div>
              <div className='p-4'>
                <h4 className='font-bold text-gray-900 mb-1'>{movie.title}</h4>
                <p className='text-xs text-gray-500 mb-3'>{movie.genre} · {movie.duration}</p>
                <div className='flex justify-between items-center'>
                  <span className='text-red-600 font-bold text-lg'>₹{movie.price}</span>
                  <button className='bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-full transition shadow'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;