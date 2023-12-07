import styled from 'styled-components';

//Styled container for the background
export const PageContainer = styled.div` 
  background: radial-gradient(#558E47, #17230D);
  height: 100vh;
  filter: blur();
  position: relative;
  overflow: hidden;
`
//Styled component for the Header
export const Header = styled.h1`
  font-family: "Regular";
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0;
  padding: 10;

//Responsiveness for the Header
  @media only screen and (min-width: 1200px) {
   font-size: 88px;
  }
`
//Styled component for the positioning of the tree as a whole
export const TreeContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;  
  overflow: hidden;
`
//Styled component for each "section" of the tree, the 19 is the 1st section, 11/6 are the 2nd section, 23/8/20 are the 3d section, etc.
export const TreeSection = styled.div` 
  display: flex;
  flex-direction: row;  
`