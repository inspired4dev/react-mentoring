import React from 'react';
import styled from 'styled-components';
import { Container } from '..';
import { MovieCard } from '../shared';
import { ButtonGroup } from '../shared/ButtonGroup';
import { MovieCardProps } from '../shared/MovieCard/MovieCard';

interface MoviesListProps {
  movies?: MovieCardProps[];
}

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align:items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 2rem;
`;

export const MoviesList = ({ movies = [] }: MoviesListProps) => {
  return (
    <Container>
      <Row>
        <ButtonGroup
          buttons={[
            { text: 'All' },
            { text: 'Documentary' },
            { text: 'Comedy' },
            { text: 'Horror' },
            { text: 'Crime' },
          ]}
        />
      </Row>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </MoviesContainer>
    </Container>
  );
};
