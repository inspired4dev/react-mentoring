/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Ellipsis } from '../../../assets/images/Group 2.svg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  position: relative;
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
  duration?: number;
  description?: string;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleSelect?: Function;
  rating?: number;
  onSearch?:Function;
}

interface Ellipsis {
  show?: 'none' | 'block';
}

const EllipsisButton = styled.button<Ellipsis>`
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;
  margin: 0;
  background: transparent;
  border: none;
  display: ${(props) => props.show};
`;
EllipsisButton.defaultProps = {
  show: 'none',
};

const Menu = styled.ul<Ellipsis>`
  width: 190px;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  display: ${(props) => props.show};
  & li {
    padding-left: 1rem;
  }
  & li:hover {
    background-color: #f65261;
  }
  position: absolute;
  top: 5px;
  right: 14px;
  list-style-type: none;
  padding: 0.2rem;
  background-color: #232323;
`;

Menu.defaultProps = {
  show: 'none',
};

export const MovieCard = ({
  title = 'Title',
  year = 'Year',
  genre = ['No genre'],
  image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg',
  handleEdit,
  handleDelete,
  handleSelect,
}: MovieCardProps) => {
  const [showEllipsis, setShowEllipsis] = useState<'none' | 'block'>('none');
  const [showMenu, setShowMenu] = useState<'none' | 'block'>('none');
  return (
    <Container
      onMouseEnter={() => setShowEllipsis('block')}
      onMouseLeave={() => setShowEllipsis('none')}
      onClickCapture={() => handleSelect?.()}
    >
      <EllipsisButton onClick={() => setShowMenu('block')} show={showEllipsis}>
        <Ellipsis />
      </EllipsisButton>
      <Menu show={showMenu}>
        <li
          onClickCapture={() => setShowMenu('none')}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          X
        </li>
        <li onClickCapture={() => handleEdit?.()}>Edit</li>
        <li onClickCapture={() => handleDelete?.()}>Delete</li>
      </Menu>
      <ImageContainer src={image} />
      <Row>
        <Text>{title}</Text>
        <YearContainer>{year}</YearContainer>
      </Row>
      <Text size='14px'>{genre?.toString()}</Text>
    </Container>
  );
};
