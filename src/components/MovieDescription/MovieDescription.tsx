import React from 'react';
import styled from 'styled-components';
import { Column, Row, Text } from '..';
import { MovieCardProps } from '../shared/MovieCard/MovieCard';
import { ReactComponent as Search } from '../../assets/images/Search_Button.svg';

const Button = styled.button`
  cursor: pointer;
  margin: 0;
  background: transparent;
  border: none;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const MovieDescription = ({
  title,
  image,
  genre,
  year,
  duration,
  description,
  rating,
  onSearch,
}: MovieCardProps) => {
  return (
    <Row align='flex-start' size='4rem'>
      <Column size='20rem'>
        <Text size='20px' color='#F65261'>
          netflixroulette
        </Text>
        <img src={image} />
      </Column>
      <Column size='40rem'>
        <Row>
          <Button onClick={() => onSearch?.()}>
            <Search />
          </Button>
        </Row>
        <Row align='flex-start'>
          <Text size='40px' color='#FFFF'>
            {title}
          </Text>
          <Circle>{rating}</Circle>
        </Row>
        <Text size='14px' color='#555555'>
          {genre?.toString()}
        </Text>
        <Row align='flex-start'>
          <Text size='24px' color='#F65261'>
            {year}
          </Text>
          <Text size='24px' color='#F65261'>
            {duration} min
          </Text>
        </Row>
        <Text size='20px' color='#555555'>
          {description}
        </Text>
      </Column>
    </Row>
  );
};
