import { Player } from '@lottiefiles/react-lottie-player'
import styled from 'styled-components';
import { useState } from 'react';
import "./App.css"
import Christmaslights from './Components/Christmaslights';
import SantsHatSvg from "./Images/SantasHatSvg.svg"
import Wishes from './Components/Wishes';

//This is a styled container for the background
const PageContainer = styled.div` 
  background: radial-gradient(#558E47, #17230D);
  height: 100vh;
  filter: blur();
  position: relative;
`

const Padding = styled.div`
  background: none;
  height: 48px;
  position: static;
  top: 0;
  width: 100%;
`
//This is a styled component for the lights at the footer
const Footer = styled.div`
  background: none;
  height: 72px;
  filter: blur();
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`

//This is a styled component for the Header
const Header = styled.h1`
  font-family: "Regular";
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0;
  padding: 10;
`
//This is a styled component for the positioning of the tree as a whole
const TreeContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;  
  overflow: hidden;
`
//This is a styled component for each "section" of the tree, the 19 is the 1st section, 11/6 are the 2nd section, 23/8/20 are the 3d section, etc.
const TreeSection = styled.div` 
  display: flex;
  flex-direction: row;  
`
//Styled component for Santa's hat, which is the logo in the bottom right
const SantasHat = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 800;
`
//These are the State functions (?) that allow the packages to open
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenWish = () => {
    setIsOpen (!isOpen)
  }

  const handleCloseWish = () => {
    setIsOpen(!isOpen);
  };

  //An array of randomly positioned Christmas lights across the screen
  const lights = new Array(116).fill(undefined)
  const footerLights = new Array (640).fill(undefined)

  return (
    <PageContainer>

 {/*Here we're using a map function that itirates over the lights array. The "height" prop on the lights component is set to a random value based on the window's heights. */}      
        {lights.map((light, i)=><div key={i}><Christmaslights height={Math.floor(Math.random()*window.innerHeight)}/></div>)}
        {isOpen && (
          <Overlay onClick={() => handleCloseWish()}>
            <Wishes></Wishes>
          </Overlay>
        )}
      <Padding></Padding>
      <Header>Christmas Calendar</Header> 
      <TreeContainer>
        {/*Here below are the packages, the "id" shows the number on the packages.*/}
        {/*They are imported by Lottie as a json file.*/}
        {/*Each package has an onClick function so it can be opened*/}
        {/*We positioned them with styled components (see above) in flex rows, and then used transform:translate to position them exactly how we wanted.*/}
        <TreeSection>
          <div onClick={() => handleOpenWish()}>
            <Player src="https://lottie.host/5c7de76b-7a6f-4a67-8f4f-ae878afc9920/21YjodIAg1.json" id="19" style={{transform: 'translate(0px, 0px)', height: '100px', width: '100px'}} loop autoplay ></Player> </div>
        </TreeSection>
        <TreeSection>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/cb24d26f-5552-4644-8810-90faa9988734/Y2P43K5fyA.json" id="11" style={{transform: 'translate(10px, -20px)', height: '80px', width: '80px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/5a391053-176c-446b-8d6e-06c26f6521f1/L4Bu7IHXNX.json" id="6" style={{transform: 'translate(-12px, -5px)', height: '90.07px', width: '100.45px'}} loop autoplay></Player></div>
        </TreeSection>
        <TreeSection>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/b0d6806a-f514-4e80-a442-1afe25dea8ea/GNQEkxmjqu.json" id="23" style={{transform: 'translate(20px, -40px)'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/a8e1c538-f06f-498d-8e63-9ea299ebf4e1/dugKs7XOGt.json" id="1" style={{transform: 'translate(5px, 3px)'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/06c0091d-1f7a-4af0-bd07-3e604b56ba5d/YNUqgxXc5H.json" id="20" style={{transform: 'translate(0px, -40px)'}} loop autoplay></Player></div>
        </TreeSection>
        <TreeSection>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/7ec47a75-0475-4ed9-bfd9-506e59022a6a/3EjBW6lDaN.json" id="2" style={{transform: 'translate(0px, -60px)', height: '76px', width: '76px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/f2edc222-a1bc-452c-a6aa-8b6e6e8203e5/O6T80BzrjX.json" id="15" style={{transform: 'translate(-10px, -50px)', height: '90.96px', width: '93.5px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/e4657509-2322-49d2-ad10-3c790a005c66/LpQNnl5etp.json" id="8" style={{transform: 'translate(0px, -40px)', height: '75.47px', width: '58.5px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/96d129f8-3e05-41f0-8043-d4891ddf6444/H88DGBOEb6.json" id="10" style={{transform: 'translate(-14px, -75px)', height: '80px', width: '75.62px'}} loop autoplay></Player></div>
        </TreeSection>
        <TreeSection>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/d0a5d8c1-fdba-41c0-9572-6d36945591f6/XtzySOONaT.json" id="22" style={{transform: 'translate(50px, -75px)', height: '77px', width: '65.58px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/7468e4fd-5c30-4edd-9dff-dbd5e4df0a1f/hvEKTtTrEb.json" id="17" style={{transform: 'translate(40px, -55px)', height: '100px', width: '90px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/b95a367a-b325-43bb-81e8-c42846eddb8d/aM3i60ftAB.json" id="5" style={{transform: 'translate(15px, -50px)', height: '100px', width: '100px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/e8b8bc0c-167b-4286-a991-09c4b14c51a8/s1zTqBklq7.json" id="4" style={{transform: 'translate(-10px, -60px)', height: '100px', width: '90px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/ad7c12cb-5add-4343-b38c-759b0e2a3a8e/bd2GyxcDgN.json" id="13" style={{transform: 'translate(-40px, -80px)', height: '120px', width: '120px'}} loop autoplay></Player></div>
        </TreeSection>
        <TreeSection>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/284aa806-ad8a-41ec-a2b0-2d9597643da3/XrSYPHT3s7.json" id="9" style={{transform: 'translate(10px, -120px)', height: '100px', width: '90px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/1b36357d-4902-40ad-9c84-a6fedd8157a5/g5PWEne1WV.json" id="16" style={{transform: 'translate(-15px, -90px)', height: '75.86px', width: '82px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/deab3c66-4100-43e6-aad9-7e3cb4645d9d/Ze4g6eAjZ9.json" id="18" style={{transform: 'translate(-10px, -90px)', height: '80.19px', width: '77px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/859c117b-6e48-4891-926e-dcec4f324fd2/38wmyR2HMX.json" id="14" style={{transform: 'translate(-12px, -100px)', height: '86px', width: '86px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/7e1e4b50-28f5-4af3-b95f-4fa02545b05b/ZAcU9QVyVR.json" id="21" style={{transform: 'translate(-20px, -70px)', height: '51px', width: '75.62px'}} loop autoplay></Player></div>
        </TreeSection>
        <TreeSection>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/6f929d97-3310-4651-964c-4af566836374/kHRVatIruI.json" id="3" style={{transform: 'translate(0px, -130px)', height: '97.31px', width: '59px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/65ed3cca-bb61-4aeb-bbf1-f338812530a9/TDUnQCgymB.json" id="24" style={{transform: 'translate(15px, -115px)', height: '93.61px', width: '222.27px'}} loop autoplay></Player></div>
          <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/7436dfbc-f679-427b-861b-451daf26f1ea/aSZsZeEJuc.json" id="7" style={{transform: 'translate(10px, -125px)', height: '86.19px', width: '70.25px'}} loop autoplay></Player></div>
        </TreeSection>
        <div onClick={() => handleOpenWish()}><Player src="https://lottie.host/91057d8f-832d-49eb-a6c7-67ca8e118b09/4K0HchApaR.json" id="12" style={{transform: 'translate(5px, -120px)', height: '105.58px', width: '81px'}} loop autoplay></Player></div>
        <SantasHat><img src={SantsHatSvg} alt ="Logo of Santa's Hat to access filters"></img></SantasHat>
      </TreeContainer>
      <Footer>
        {footerLights.map((light, i)=><div key={i}><Christmaslights height={Math.floor(Math.random()*72)}/></div>)}
      </Footer>
    </PageContainer>
  )
}

export default App;