import React from 'react';
import styled from 'styled-components';
import { Button } from '../shared';
import { ModalFrame } from '../shared/ModalFrame';

interface IText {
  size?: string;
}

export const Text = styled.p<IText>`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => props.size};
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.color};
  margin: 0;
`;

Text.defaultProps = {
  size: '40px',
  color: '#fffff',
};

export const Column = styled.div<IText>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.size};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-end;
`;

interface ModalAddProps {
  title: string;
  show: boolean;
  handleClose?: () => void;
}

export const ModalDelete = ({ title, show, handleClose }: ModalAddProps) => {
  return (
    <ModalFrame handleClose={handleClose} show={show}>
      <Text>{title} movie</Text>
      <Text size='15px'>Are you sure you want to delete this movie?</Text>
      <Row>
        <Button size='3rem'>Confirm</Button>
      </Row>
    </ModalFrame>
  );
};
