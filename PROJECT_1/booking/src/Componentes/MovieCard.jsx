import React from 'react';

const MovieCard = ({ title, genre, rating, image }) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-white text-xs">
          ★ {rating}/10
        </div>
      </div>
      <h3 className="mt-2 font-bold text-gray-800 group-hover:text-red-500 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500">{genre}</p>
    </div>
  );
};

export default MovieCard;