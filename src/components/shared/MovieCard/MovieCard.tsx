import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const ImageContainer = styled.img`
  height: 486px;
  object-fit: cover;
`;

interface IText {
  size?: string;
}

export const Text = styled.p<IText>`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.size};
  line-height: 22px;
  color: white;
  opacity: 0.7;
  margin-top: 5px;
  margin-bottom: 0;
`;

Text.defaultProps = {
  size: '18px',
};

export const YearContainer = styled.div`
  border: 1px solid #979797;
  border-radius: 4px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  width: 66px;
  color: white;
  opacity: 0.7;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export interface MovieCardProps {
  title?: string;
  year?: string;
  genre?: string[];
  image?: string;
}

export const MovieCard = ({
  title = 'Title',
  year = 'Year',
  genre = ['No genre'],
  image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg',
}: MovieCardProps) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Row>
        <Text>{title}</Text>
        <YearContainer>{year}</YearContainer>
      </Row>
      <Text size='14px'>{genre?.toString()}</Text>
    </Container>
  );
};
