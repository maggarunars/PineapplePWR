import { Player, } from '@lottiefiles/react-lottie-player'
import styled from 'styled-components';
import "./App.css"
import SantsHatSvg from "./Images/SantasHatSvg.svg"

//This is a styled container for the background
const PageContainer = styled.div` 
  background: radial-gradient(#558E47, #17230D);
  
`
//This is a style component for the Header
const Header = styled.h1`
  font-family: "Regular";
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0;
  padding: 10;

`

const TreeContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;  
  overflow: hidden;
`
const TreeSection = styled.div` 
  display: flex;
  flex-direction: row;  
`

const SantasHat = styled.div`
position: absolute;
bottom: 0;
right: 0;

`


function App() {

  

return (
  <PageContainer>
<Header>Christmas Calendar</Header> 
<TreeContainer>
  
  {/*Here below are the packages, the "id" shows the number on the packages*/}
<TreeSection>
<Player src="https://lottie.host/61ebe620-1145-4c71-9f7c-2ab81571279c/TfFF31xSQN.json" id = "19" style={{transform: 'translate(0px, 0px)', height: '100px', width: '100px'}} loop autoplay></Player>
</TreeSection> 

<TreeSection>
<Player src="https://lottie.host/884469d3-2369-41f7-8d92-3d9ac135b6b8/gQvFykTktz.json" id = "11" style={{transform: 'translate(10px, -20px)', height: '80px', width: '80px'}} loop autoplay>  </Player> 
<Player src="https://lottie.host/58112e4f-d916-4e38-80f9-7619a545b024/GMuMYLVC7V.json" id = "6" style={{transform: 'translate(-12px, -5px)', height: '90.07px', width: '100.45px'}} loop autoplay> </Player>
</TreeSection>

<TreeSection>
<Player src="https://lottie.host/87177151-ea18-483d-9aab-349aea2d529a/fSSbq2OteE.json" id = "23" style={{transform: 'translate(20px, -40px)'}} loop autoplay> </Player>
<Player src="https://lottie.host/c47df01e-6f3d-4b08-a35c-a7ba89e974b4/8tujcNBQeq.json" id = "1" style={{transform: 'translate(5px, 3px)'}} loop autoplay> </Player>
<Player src="https://lottie.host/9785eb1f-6cb0-4959-be10-48b1028dd54a/EqjawmWaaT.json" id = "20"style={{transform: 'translate(0px, -40px)'}} loop autoplay> </Player>

</TreeSection>


<TreeSection>
<Player src="https://lottie.host/389e1276-1a51-4d5a-9b1f-080a98b55ec0/uZ2oezPboU.json" id = "2" style={{transform: 'translate(0px, -60px)', height: '76px', width: '76px'}} loop autoplay> </Player>
<Player src="https://lottie.host/1200bdb6-b66a-466f-9913-1d0c3ef080f5/YZka3a88Aq.json" id ="15"style={{transform: 'translate(-10px, -50px)', height: '90.96px', width: '93.5px'}} loop autoplay> </Player>
<Player src="https://lottie.host/dd4f3c96-d7ff-4dac-ab95-8c99df8cb9e5/fmDb4A04xg.json" id ="8"style={{transform: 'translate(0px, -40px)', height: '75.47px', width: '58.5px'}} loop autoplay> </Player>
<Player src="https://lottie.host/4327f0e8-6e65-4cd9-937a-d6497ac1ce9c/nT6DVajsMh.json" id ="10" style={{transform: 'translate(-14px, -75px)', height: '80px', width: '75.62px'}} loop autoplay> </Player>
</TreeSection>


<TreeSection>
<Player src="https://lottie.host/b00be1b5-3276-42a4-a992-e748e65422f1/eHj8o5DpXc.json" id ="22" style={{transform: 'translate(50px, -75px)', height: '77px', width: '65.58px'}} loop autoplay> </Player>
<Player src="https://lottie.host/934f6ee4-3714-4639-8f29-b9e1e461cf0d/uIwUFgdgYR.json" id ="17" style={{transform: 'translate(40px, -55px)', height: '100px', width: '90px'}} loop autoplay> </Player>
<Player src="https://lottie.host/84b73c15-9b1b-4b25-a123-2d3590f60ebb/KXKGGq3oRD.json" id ="5" style={{transform: 'translate(15px, -50px)', height: '100px', width: '100px'}} loop autoplay> </Player>
<Player src="https://lottie.host/638b3e59-7eb1-4cbc-9977-d5a7155e262b/ftt937kGkB.json" id ="4" style={{transform: 'translate(-10px, -60px)', height: '100px', width: '90px'}} loop autoplay> </Player>
<Player src="https://lottie.host/138aed7c-8f18-470e-b4c0-0fb4a45f8e64/G5465ea5LF.json" id ="13" style={{transform: 'translate(-40px, -80px)', height: '120px', width: '120px'}} loop autoplay> </Player>
</TreeSection>


<TreeSection>
<Player src="https://lottie.host/adb82a2b-3f07-448b-8b1a-47a7f39e2d41/Z5fTFhAc9c.json" id ="9" style={{transform: 'translate(10px, -120px)', height: '100px', width: '90px'}} loop autoplay> </Player>
<Player src="https://lottie.host/da63c2ba-f302-483d-9194-f22f9f66e447/2Zd5z15noB.json" id ="16" style={{transform: 'translate(-15px, -90px)', height: '75.86px', width: '82px'}} loop autoplay> </Player>
<Player src="https://lottie.host/d72653cc-04d1-4a02-a8cd-1c263bce984a/B2fPwXmOGP.json" id ="18" style={{transform: 'translate(-10px, -90px)', height: '80.19px', width: '77px'}} loop autoplay> </Player>
<Player src="https://lottie.host/7dfa5472-9042-42f1-9862-f5513ca176b2/VmxESjoNl9.json" id ="14" style={{transform: 'translate(-12px, -100px)', height: '86px', width: '86px'}} loop autoplay> </Player>
<Player src="https://lottie.host/6a8cdd8c-13de-4848-8d7d-7da509594e76/1OWh50P7VI.json" id ="21" style={{transform: 'translate(-20px, -70px)', height: '51px', width: '75.62px'}} loop autoplay> </Player>
</TreeSection>


<TreeSection>
<Player src="https://lottie.host/f364b201-5bdc-4c96-9657-27a442ef7694/1gC5gQvcJv.json" id ="3" style={{transform: 'translate(0px, -130px)', height: '97.31px', width: '59px'}} loop autoplay> </Player>
<Player src="https://lottie.host/65ed3cca-bb61-4aeb-bbf1-f338812530a9/TDUnQCgymB.json" id ="24" style={{transform: 'translate(15px, -115px)', height: '93.61px', width: '222.27px'}} loop autoplay> </Player>
<Player src="https://lottie.host/d7ea6b5b-f389-4b87-b96c-cd3097e49117/kg7gIc0bO7.json" id ="7" style={{transform: 'translate(10px, -125px)', height: '86.19px', width: '70.25px'}} loop autoplay> </Player>
</TreeSection>

<Player src="https://lottie.host/c341e895-55a9-4b8b-9dff-1a8e6cac377f/rn0n3TwB4A.json" id ="12" style={{transform: 'translate(5px, -120px)', height: '105.58px', width: '81px'}} loop autoplay></Player>
<SantasHat><img src={SantsHatSvg} alt ="Logo of Santa's Hat to access filters"></img></SantasHat>

  </TreeContainer>
  </PageContainer>
)


}

export default App;
