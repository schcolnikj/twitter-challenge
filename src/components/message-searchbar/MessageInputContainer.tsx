import styled from "styled-components";

export const MessageInputContainer = styled.div`
    border-radius: 8px;
    padding: 8px;
    border: none
    transition: 0.3s;

    @media (min-width: 600px) {
        width: 337px;
    
        &.active-div {
          width: 415px;
          //transform: translateX(39px); /* Adjust the value based on the width difference */
        }
      }
`;

//La idea es que el borde y el background cambien de color como ConfigButton. Cuando esta activo puede tener un borde mas oscuro y un background mas claro