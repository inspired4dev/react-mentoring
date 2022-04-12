import React from 'react';
import { Header, MoviesList } from './components';
import { Footer } from './components/Footer';
import { MovieCardProps } from './components/shared/MovieCard/MovieCard';

const moviesMock: MovieCardProps[] = [
  {
    title: 'Pulp Fiction',
    year: '2004',
    genre: ['Action', 'Adventure'],
    image:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/pulp-fiction.jpg?itok=3YZ8ygRT',
  },
  {
    title: 'Bohemian Rapsody',
    year: '2003',
    genre: ['Drama', 'Biography', 'Music'],
    image: 'https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg',
  },
  {
    title: 'Kill Bill: Vol 2',
    year: '1994',
    genre: ['Oscar winning Movie'],
    image:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/46c67c318b541f05f7a193a680c899a6e2a3dbcfb4f34edb92048828a5580d4e._RI_V_TTW_.jpg',
  },
  {
    title: 'Avengers: War of Infinity',
    year: '2004',
    genre: ['Action', 'Adventure'],
    image:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2629bad87568290e63a1f62e81fd2d9bf3703268cdbc6ff38a02a6c5de0f0e29._RI_V_TTW_.jpg',
  },
  {
    title: 'Inception',
    year: '2003',
    genre: ['Action', 'Adventure'],
    image: 'https://m.media-amazon.com/images/I/51bRJ3i-O8L._SY445_.jpg',
  },
  {
    title: 'Reservoir dogs',
    year: '1994',
    genre: ['Oscar winning Movie'],
    image:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/reservoir-dogs.jpg?itok=HJ1otphS',
  },
];

function App() {
  return (
    <>
      <Header />
      <MoviesList movies={moviesMock} />
      <Footer />
    </>
  );
}

export default App;
