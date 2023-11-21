import styled from "styled-components";
import { IconType } from "../icon/Icon";

interface ButtonProps {
    variant?: 'outlined' | 'fulfilled' | 'ghost' | 'white';
    size?: 'small' | 'medium' | 'large' | 'default';
    color?: string;
    icon?: IconType;
    selectedIcon?: IconType;
} 

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 40px;
  padding: 16px;
  border: none;
  transition: ease-in-out 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  p {
    font-size: 20px;
    font-family: "Manrope";
    line-height: 110%;
    letter-spacing: -0.2px;
    text-transform: capitalize;
    margin: 0;
  }

  .active {prop
    font-weight: 800;
    line-height: 110%;
  }

  @media (max-width: 1024px) {
    p {
      display: none;
    }

    .Button {
      display: none;
    }
  }

`;

export const ConfigButton = styled(ButtonBase)<ButtonProps>`
  ${(props) => {
    switch (props.variant) {
        case 'outlined': 
            return `
                background-color: transparent;
                border: 2px solid ${props.color || 'black'}
            `;
        case 'fulfilled': 
            return `
                background-color: ${props.color || 'black'}
                color: white;
            `;
        case 'ghost': 
            return `
                background-color: transparent;
                color: ${props.color || 'black'}
            `;
        case 'white':
            return `
                background-color: white; 
                color: black        
            `;
    }
  }}

  ${props => {
    switch (props.size) {
        case 'small': 
            return `
                padding: 5px 10px;
                font-size: 12px;
            `;
        case 'medium': 
            return `
                padding: 10px 20px;
                font-size: 16px;
            `;
        case 'large': 
            return `
                padding: 20px 40px;
                font-size: 20px;
            `;
        case 'default': 
            return `
                padding: 10px 20px;
                font-size: 16px;
            `;
    }
  }}
`;