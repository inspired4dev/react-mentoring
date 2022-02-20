import { title } from 'process';
import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../shared';
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

export const ModalAdd = ({ title, show, handleClose }: ModalAddProps) => {
  return (
    <ModalFrame handleClose={handleClose} show={show}>
      <Text>{title} movie</Text>
      <Row>
        <Column size='30rem'>
          <Text size='16px' color='#F65261'>
            Title
          </Text>
          <Input defaultValue='soy' type='text'></Input>
          <Text size='16px' color='#F65261'>
            Movie URL
          </Text>
          <Input placeholder='https://' type='url'></Input>
        </Column>
        <Column size='20rem'>
          <Text size='16px' color='#F65261'>
            Release Date
          </Text>
          <Input placeholder='Select Date' type='date'></Input>
          <Text size='16px' color='#F65261'>
            Rating
          </Text>
          <Input type='number'></Input>
          <Text size='16px' color='#F65261'>
            Runtime
          </Text>
          <Input type='number'></Input>
        </Column>
      </Row>
      <Text size='16px' color='#F65261'>
        Overview
      </Text>
      <Input height='13rem' placeholder='Movie description' type='text'></Input>
      <Row>
        <Button size='3rem' color='secondary'>
          Reset
        </Button>
        <Button size='3rem'>Submit</Button>
      </Row>
    </ModalFrame>
  );
};
