import styled from 'styled-components';

interface IButtonStyle {
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: string;
}

export const Button = styled.button<IButtonStyle>`
  ${(props) => {
    switch (props.color) {
      case 'secondary':
        return `
          background-color: #232323;
          color: #F65261;
          border: 1.5px solid #F65261;
        `;
      case 'tertiary':
        return `
          background: rgba(96, 96, 96, 0.68);;
          color: #F65261;
        `;
      default:
        return `
        background-color: #F65261;
        color: white;
          `;
    }
  }}
  border-radius: 4px;
  height: 57px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  padding-right: ${(props) => props.size || '1rem'};
  padding-left: ${(props) => props.size || '1rem'};
  cursor: pointer;
  z-index: 1;
`;

Button.defaultProps = {
  color: 'primary',
};
