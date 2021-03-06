import styled from 'styled-components';

interface IStyledInput {
  transparency?: boolean;
}

export const Input = styled.input<IStyledInput>`
  background-color: rgba(
    50,
    50,
    50,
    ${(props) => (props.transparency ? 0.8 : 1)}
  );
  height: ${(props) => props.height};
  width: 100%;
  border-radius: 4px;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  z-index: 1;
  vertical-align: top;
`;

Input.defaultProps = {
  transparency: false,
  height: '57px',
};
