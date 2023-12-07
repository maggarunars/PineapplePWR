import styled from 'styled-components';

//styled component for the background
export const PageContainer = styled.div` 
  background: radial-gradient(#558E47, #17230D);
  height: 100vh;
  filter: blur();
  position: relative;
  overflow: hidden;
`

//styled component for the padding at the top
export const Padding = styled.div`
  background: none;
  height: 48px;
  position: static;
  top: 0;
  width: 100%;
`

//styled component for the header
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

//styled component for the positioning of the tree as a whole
export const TreeContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;  
  overflow: hidden;
`

//styled component for each "section" of the tree, the 19 is the 1st section, 11 and 6 are the 2nd section, 23, 8, and 20 are the 3d section, etc.
export const TreeSection = styled.div` 
  display: flex;
  flex-direction: row;  
`

//styled component for Santa's hat, which is the image in the bottom right
export const SantasHat = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 8px;
//Responsiveness for the title
  @media only screen and (min-width: 1200px) {
   margin: 40px;   
  }
`

//styled component for the footer containing the extra lights
export const Footer = styled.div`
  background: none;
  height: 72px;
  filter: blur();
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`

//styled component for when a package is open, the background is overlayed with a darker color for the activity to pop 
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 800;
`