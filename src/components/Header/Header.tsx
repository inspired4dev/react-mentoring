import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../shared';
import { ReactComponent as Image } from '../../assets/images/Bitmap.svg';

export interface HeaderProps {
  children?: ReactNode;
  content?: boolean;
  handleOnAdd?: () => void;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 1200px;
  margin: auto;
  min-height: 27rem;
  background-color: #232323;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
  gap: 2rem;
`;

export const Header = ({
  content,
  children,
  handleOnAdd,
}: HeaderProps): ReactElement => (
  <Container>
    {content ? (
      children
    ) : (
      <>
        <Image
          style={{
            position: 'absolute',
            'z-index': '0',
            top: '0',
            right: '0',
          }}
        />
        <Row>
          <h1>netflixroulette</h1>
          <Button onClick={() => handleOnAdd?.()} color='tertiary'>
            + Add Movie
          </Button>
        </Row>
        <Row>
          <Input transparency placeholder='What do you want to watch?' />
          <Button>Search</Button>
        </Row>
      </>
    )}
  </Container>
);
