import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  &:hover {
    background-color: #f65261;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export interface ButtonGroupProps {
  buttons: ButtonProps[];
}

export interface ButtonProps {
  text: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick?: Function;
}

export const ButtonGroup = ({ buttons = [] }: ButtonGroupProps) => {
  return (
    <Row>
      {buttons.map((button) => (
        <Button key={button.text}>{button.text}</Button>
      ))}
    </Row>
  );
};
