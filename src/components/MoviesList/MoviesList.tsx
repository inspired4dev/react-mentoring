/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, ModalAdd, ModalDelete } from '..';
import { MovieCard } from '../shared';
import { ButtonGroup } from '../shared/ButtonGroup';
import { MovieCardProps } from '../shared/MovieCard/MovieCard';

interface MoviesListProps {
  movies?: MovieCardProps[];
  selectMovie?: Function;
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

export const MoviesList = ({ movies = [], selectMovie }: MoviesListProps) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
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
          <MovieCard
            handleSelect={() => selectMovie?.(movie)}
            handleEdit={() => setShowAdd(true)}
            handleDelete={() => setShowDelete(true)}
            key={movie.title}
            {...movie}
          />
        ))}
      </MoviesContainer>
      <ModalAdd
        handleClose={() => setShowAdd(false)}
        show={showAdd}
        title='Edit'
      />
      <ModalDelete
        handleClose={() => setShowDelete(false)}
        show={showDelete}
        title='Delete'
      />
    </Container>
  );
};
