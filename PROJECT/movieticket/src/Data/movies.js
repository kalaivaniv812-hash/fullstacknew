export const movies = [
  {
    id: 1,
    title: 'HOPPERS',
    image: 'https://image.tmdb.org/t/p/w500/8cdWjvZcOrnJ1Zp5FkXh8Q3Y6hZ.jpg',
    genre: 'Animation | Comedy',
    duration: '1h 45m',
    rating: 4.2,
    price: 320,
    ageRating: 'U/A',
    language: 'English',
    description: 'A heartwarming animated comedy about a group of kangaroos who discover an unexpected world beyond their outback.',
    cast: ['Tom Hardy', 'Emma Watson', 'Chris Pratt']
  },
  {
    id: 2,
    title: 'ZOOTOPIA 2',
    image: 'https://image.tmdb.org/t/p/w500/oxxqiyWrnM0XPnBtVeoMlgKUIzW.jpg',
    genre: 'Animation | Adventure',
    duration: '2h 10m',
    rating: 4.8,
    price: 380,
    ageRating: 'U',
    language: 'English',
    description: 'Judy and Nick return in an all-new adventure, uncovering a bigger mystery that shakes Zootopia to its core.',
    cast: ['Ginnifer Goodwin', 'Jason Bateman', 'Idris Elba']
  },
  {
    id: 3,
    title: 'PROJECT HAIL MARY',
    image: 'https://image.tmdb.org/t/p/w500/pk1s7HZVYqS5bXrqXW5KqQ2VgY.jpg',
    genre: 'Sci-Fi | Thriller',
    duration: '2h 25m',
    rating: 4.6,
    price: 450,
    ageRating: 'UA',
    language: 'English',
    description: 'A lone astronaut wakes up millions of miles from Earth with no memory — and the fate of humanity in his hands.',
    cast: ['Ryan Gosling', 'Sandra Hüller', 'Millie Bobby Brown']
  },
  {
    id: 4,
    title: 'THE SHEEP DETECTIVES',
    image: 'https://image.tmdb.org/t/p/w500/8XuqFj6GqFyZkX5mHcZ2iQcGqN.jpg',
    genre: 'Mystery | Comedy',
    duration: '1h 55m',
    rating: 4.4,
    price: 350,
    ageRating: 'U',
    language: 'English',
    description: 'A hilarious whodunit where a flock of surprisingly clever sheep solve crimes that baffle the local police.',
    cast: ['Hugh Jackman', 'Kate Winslet', 'Steve Carell']
  }
];

export const generateSeats = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seats = [];
  for (let row of rows) {
    for (let i = 1; i <= 10; i++) {
      const isVip = row === 'F' || row === 'G';
      const isBooked = Math.random() < 0.15;
      seats.push({
        id: `${row}${i}`,
        row: row,
        number: i,
        status: isBooked ? 'booked' : 'available',
        type: isVip ? 'vip' : 'normal',
        price: isVip ? 350 : 250
      });
    }
  }
  return seats;
};

export const galleryImages = [
  'https://image.tmdb.org/t/p/w500/8cdWjvZcOrnJ1Zp5FkXh8Q3Y6hZ.jpg',
  'https://image.tmdb.org/t/p/w500/oxxqiyWrnM0XPnBtVeoMlgKUIzW.jpg',
  'https://image.tmdb.org/t/p/w500/pk1s7HZVYqS5bXrqXW5KqQ2VgY.jpg',
  'https://image.tmdb.org/t/p/w500/8XuqFj6GqFyZkX5mHcZ2iQcGqN.jpg',
  'https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy5fV5mYk5R.jpg',
  'https://image.tmdb.org/t/p/w500/8tI0VlFmG9EeVb7pXqNfQqLqZq.jpg'
];