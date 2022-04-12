import React, { useState } from 'react';
import {
  Header,
  ModalAdd,
  MoviesList,
  Footer,
  MovieDescription,
} from './components';
import { MovieCardProps } from './components/shared/MovieCard/MovieCard';

const duration = 154;
const description =
  'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra';

const moviesMock: MovieCardProps[] = [
  {
    title: 'Pulp Fiction',
    year: '2004',
    genre: ['Action', 'Adventure'],
    image:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/pulp-fiction.jpg?itok=3YZ8ygRT',
    duration,
    description,
    rating: 8.0,
  },
  {
    title: 'Bohemian Rapsody',
    year: '2003',
    genre: ['Drama', 'Biography', 'Music'],
    image: 'https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg',
    duration,
    description,
    rating: 8.1,
  },
  {
    title: 'Kill Bill: Vol 2',
    year: '1994',
    genre: ['Oscar winning Movie'],
    image:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/46c67c318b541f05f7a193a680c899a6e2a3dbcfb4f34edb92048828a5580d4e._RI_V_TTW_.jpg',
    duration,
    description,
    rating: 8.2,
  },
  {
    title: 'Avengers: War of Infinity',
    year: '2004',
    genre: ['Action', 'Adventure'],
    image:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2629bad87568290e63a1f62e81fd2d9bf3703268cdbc6ff38a02a6c5de0f0e29._RI_V_TTW_.jpg',
    duration,
    description,
    rating: 8.3,
  },
  {
    title: 'Inception',
    year: '2003',
    genre: ['Action', 'Adventure'],
    image: 'https://m.media-amazon.com/images/I/51bRJ3i-O8L._SY445_.jpg',
    duration,
    description,
    rating: 8.4,
  },
  {
    title: 'Reservoir dogs',
    year: '1994',
    genre: ['Oscar winning Movie'],
    image:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/reservoir-dogs.jpg?itok=HJ1otphS',
    duration,
    description,
    rating: 8.5,
  },
];

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  return (
    <>
      <Header
        content={JSON.stringify(movieSelected) !== '{}'}
        handleOnAdd={() => setShowAdd(true)}
      >
        {
          <MovieDescription
            onSearch={() => setMovieSelected({})}
            {...movieSelected}
          />
        }
      </Header>
      <MoviesList selectMovie={setMovieSelected} movies={moviesMock} />
      <Footer />
      <ModalAdd
        handleClose={() => setShowAdd(false)}
        show={showAdd}
        title='Add'
      />
    </>
  );
}

export default App;
