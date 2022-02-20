/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/Close Button.svg';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #232323;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

interface ModalFrameProps {
  children?: ReactNode;
  show: boolean;
  handleClose?: Function;
}

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalFrame = ({
  children,
  show,
  handleClose,
}: ModalFrameProps): ReactElement | null => {
  return show ? (
    <ModalContainer>
      <ModalContent>
        <Row>
          <Button onClick={() => handleClose?.()}>
            <Close />
          </Button>
        </Row>
        {children}
      </ModalContent>
    </ModalContainer>
  ) : null;
};
