import styled from 'styled-components';

interface StyledMessageContainerProps {
  backgroundColor?: string;
  borderColor?: string;
  variant?: 'default' | 'primary' | 'secondary';
  textAlign?: 'left' | 'right' | 'center';
}

const StyledMessageContainer = styled.div<StyledMessageContainerProps>`
  display: inline-block;
  padding: 16px;
  gap: 16px;
  border-radius: 40px;
  background-color: ${props => props.backgroundColor || 'main'};
  border: 2px solid ${props => props.borderColor || 'black'};
  text-align: ${props => props.textAlign || 'left'};

  ${props => props.variant === 'primary' && `
    background-color: blue;
    color: white;
  `}

  ${props => props.variant === 'secondary' && `
    background-color: green;
    color: white;
  `}
`;

export default StyledMessageContainer;

