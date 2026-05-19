import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-6xl mb-4'>🎬</div>
          <h2 className='text-2xl font-bold mb-4'>Movie not found</h2>
          <button onClick={() => navigate('/')} className='bg-red-600 text-white px-6 py-2 rounded-full'>Go Home</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className='relative h-[500px] overflow-hidden'>
        <div 
          className='absolute inset-0' 
          style={{ 
            backgroundImage: `url(${movie.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'blur(20px) brightness(0.3)',
            transform: 'scale(1.1)'
          }} 
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
        
        <button 
          onClick={() => navigate(-1)} 
          className='absolute top-6 left-8 z-20 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md transition'
        >
          ← Back
        </button>
        
        <div className='absolute bottom-0 left-0 right-0 z-10 flex items-end gap-8 px-8 pb-10 max-w-7xl mx-auto'>
          <div className='shrink-0 shadow-2xl rounded-2xl overflow-hidden' style={{ width: 180, height: 270 }}>
            <img src={movie.image} alt={movie.title} className='w-full h-full object-cover' />
          </div>
          <div className='pb-2'>
            <span className='inline-block bg-red-600/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-3'>
              {movie.genre}
            </span>
            <h1 className='text-5xl font-black text-white mb-3'>{movie.title}</h1>
            <div className='flex gap-4 mb-5'>
              <span className='text-yellow-400 font-bold'>⭐ {movie.rating}/5</span>
              <span className='text-white/80'>🕐 {movie.duration}</span>
              <span className='text-white/80'>🌐 {movie.language}</span>
            </div>
            <button 
              onClick={() => navigate('/booking', { state: { movie } })} 
              className='bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition shadow-lg'
            >
              🎟 Book Tickets
            </button>
          </div>
        </div>
      </div>
      
      {/* Details Section */}
      <div className='max-w-7xl mx-auto px-8 py-12'>
        <div className='mb-10'>
          <h2 className='text-2xl font-bold mb-4'>About the Movie</h2>
          <p className='text-gray-600 leading-relaxed max-w-3xl'>{movie.description}</p>
        </div>
        
        <div>
          <h2 className='text-2xl font-bold mb-6'>Cast & Crew</h2>
          <div className='flex gap-6 flex-wrap'>
            {movie.cast?.map((actor, idx) => (
              <div key={idx} className='text-center'>
                <div className='w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2 shadow-lg'>
                  {actor[0]}
                </div>
                <p className='text-sm font-medium'>{actor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;