import { createGlobalStyle } from 'styled-components';


//Estilos Globais do Styled-component//
export const Global =  createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  }
  body {
    overflow-y: scroll;
    color:rgb(51, 63, 72);
    
    -webkit-font-smoothing: antialiased !important;
  }
  body html #root {
    height: 100vh;
    width:100vw;
  }
`;

export default Global;