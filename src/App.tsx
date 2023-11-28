import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { transform } from 'typescript';
import { CSSProperties } from 'styled-components';
import styled from 'styled-components';

const PageContainer = styled.div` 
  background-color: green;
  height: 100vh;
  ;
`
const Header = styled.h1`
  font-size: 40px;
  color: white;
  text-align: center;
  ;
`



function App() {

  const packageStyle:CSSProperties = {
    height: '80px', width: '80px', position: 'absolute'
  

  }

return (
  <PageContainer>
<div>
  <h1>Christmas Calendar</h1> 
<div><Player src="https://lottie.host/61ebe620-1145-4c71-9f7c-2ab81571279c/TfFF31xSQN.json" id = "19" style={{...packageStyle, left: 150, top: 128, height: '100px', width: '100px'}} loop autoplay></Player></div>
<div><Player src="https://lottie.host/884469d3-2369-41f7-8d92-3d9ac135b6b8/gQvFykTktz.json" id = "11" style={{...packageStyle, left: 140.95, top: 212.48, height: '62.25px', width: '68.63px'}} loop autoplay>  </Player> </div>
<div><Player src="https://lottie.host/58112e4f-d916-4e38-80f9-7619a545b024/GMuMYLVC7V.json" id = "6" style={{...packageStyle, left: 181, top: 221, height: '90.07px', width: '100.45px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/87177151-ea18-483d-9aab-349aea2d529a/fSSbq2OteE.json" id = "23" style={{...packageStyle, left: 192.78, top: 369.69, height: '86.5px', width: '93.5px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/9785eb1f-6cb0-4959-be10-48b1028dd54a/EqjawmWaaT.json" id = "20" style={{...packageStyle, left: 236, top: 284, height: '100px', width: '100px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/c47df01e-6f3d-4b08-a35c-a7ba89e974b4/8tujcNBQeq.json" id = "1" style={{...packageStyle, left: 180, top: 326, height: '74.48px', width: '61.89px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/389e1276-1a51-4d5a-9b1f-080a98b55ec0/uZ2oezPboU.json" id = "2" style={{...packageStyle, left: 41, top: 376, height: '76px', width: '76px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/4327f0e8-6e65-4cd9-937a-d6497ac1ce9c/nT6DVajsMh.json" id ="10" style={{...packageStyle, left: 276.71, top: 449.08, height: '51px', width: '75.62px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/1200bdb6-b66a-466f-9913-1d0c3ef080f5/YZka3a88Aq.json" id ="15"style={{...packageStyle, left: 103, top: 388, height: '90.96px', width: '93.5px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/dd4f3c96-d7ff-4dac-ab95-8c99df8cb9e5/fmDb4A04xg.json" id ="8"style={{...packageStyle, left: 211, top: 404, height: '75.47px', width: '58.5px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/b00be1b5-3276-42a4-a992-e748e65422f1/eHj8o5DpXc.json" id ="22"style={{...packageStyle, left: 87.57, top: 458, height: '77px', width: '65.58px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/138aed7c-8f18-470e-b4c0-0fb4a45f8e64/G5465ea5LF.json" id ="13"style={{...packageStyle, left: 261.8, top: 489.42, height: '94.16px', width: '89px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/934f6ee4-3714-4639-8f29-b9e1e461cf0d/uIwUFgdgYR.json" id ="17"style={{...packageStyle, left: 117.39, top: 474, height: '51px', width: '75.62px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/638b3e59-7eb1-4cbc-9977-d5a7155e262b/ftt937kGkB.json" id ="4"style={{...packageStyle, left: 215.41, top: 479.43, height: '51.75px', width: '75.62px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/84b73c15-9b1b-4b25-a123-2d3590f60ebb/KXKGGq3oRD.json" id ="5"style={{...packageStyle, left: 164.26, top: 470, height: '79.86px', width: '65.6px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/6a8cdd8c-13de-4848-8d7d-7da509594e76/1OWh50P7VI.json" id ="21"style={{...packageStyle, left: 308.36, top: 575, height: '51px', width: '75.62px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/da63c2ba-f302-483d-9194-f22f9f66e447/2Zd5z15noB.json" id ="16"style={{...packageStyle, left: 56, top: 553, height: '75.86px', width: '82px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/d72653cc-04d1-4a02-a8cd-1c263bce984a/B2fPwXmOGP.json" id ="18" style={{...packageStyle, left: 147, top: 545, height: '80.19px', width: '77px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/7dfa5472-9042-42f1-9862-f5513ca176b2/VmxESjoNl9.json" id ="14"style={{...packageStyle, left: 224, top: 549, height: '86px', width: '86px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/adb82a2b-3f07-448b-8b1a-47a7f39e2d41/Z5fTFhAc9c.json" id ="9"style={{...packageStyle, left: -4.96, top: 582.81, height: '53.36px', width: '75.62px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/f364b201-5bdc-4c96-9657-27a442ef7694/1gC5gQvcJv.json" id ="3"style={{...packageStyle, left: 13, top: 608, height: '97.31px', width: '59px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/d7ea6b5b-f389-4b87-b96c-cd3097e49117/kg7gIc0bO7.json" id ="7"style={{...packageStyle, left: 300, top: 608, height: '86.19px', width: '70.25px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/f364b201-5bdc-4c96-9657-27a442ef7694/1gC5gQvcJv.json" id ="3--"style={{...packageStyle, left: 6, top: 608, height: '86.19px', width: '70.25px'}} loop autoplay> </Player></div>
<div><Player src="https://lottie.host/c341e895-55a9-4b8b-9dff-1a8e6cac377f/rn0n3TwB4A.json" id ="12"style={{...packageStyle, left: 155, top: 709, height: '105.58px', width: '81px'}} loop autoplay> </Player></div>

  </div>
  </PageContainer>
)


}

export default App;

