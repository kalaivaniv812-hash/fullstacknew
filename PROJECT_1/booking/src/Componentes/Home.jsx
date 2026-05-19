import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

const Home = () => {
  const movies = [
    { title: "Kalki 2898 AD", genre: "Sci-Fi/Action", rating: "9.2", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500" },
    { title: "Indian 2", genre: "Action/Drama", rating: "8.5", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500" },
    { title: "Deadpool & Wolverine", genre: "Action/Comedy", rating: "9.5", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500" },
    { title: "Raayan", genre: "Action/Crime", rating: "9.0", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=500" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="bg-slate-800 p-8">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl h-64 bg-gradient-to-r from-red-600 to-purple-800 flex items-center px-12">
           <h2 className="text-white text-5xl font-bold italic">HK TICKET EXCLUSIVE <br/>OFFERS</h2>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Recommended Movies</h2>
          <span className="text-red-500 cursor-pointer text-sm font-medium">See All ›</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((m, index) => (
            <MovieCard key={index} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;