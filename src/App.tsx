import { useState } from 'react';
import './App.css'
import Christmaslights from './Components/Christmaslights';
import SantaHatSvg from './Images/SantasHatSvg.svg';
import Wishes from './Components/Wishes';
import { PageContainer, Padding, Header, TreeContainer, TreeSection, SantasHat, Footer, Overlay } from './Components/PageStyles';
import Present from './Components/WishStyles';
import { WishProvider } from './Components/WishContext';

//These are the State hooks that allow the packages to open and give us wishes
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseWish = () => {
    setIsOpen(!isOpen);
  }
  const handleOpenWish = () => {
    setIsOpen(!isOpen);
  };
  const wishContextValue = {
    handleOpenWish,
  }

  //An array of randomly positioned Christmas lights across the screen
  const lights = new Array(116).fill(undefined)
  const footerLights = new Array (160).fill(undefined)

  return (
    <WishProvider value={wishContextValue}>
    <PageContainer>
    {/*Here we're using a map function that itirates over the lights array. The "height" prop on the lights component is set to a random value based on the window's height. */}      
        {lights.map((light, i)=><div key={i}><Christmaslights height={Math.floor(Math.random()*window.innerHeight)}/></div>)}
        {/*Overlay behind the Wishes when they appear*/}
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
      {/*We positioned them with styled components in flex rows, and then used transform:translate to position them exactly how we wanted in a Tree shape.*/}
        <TreeSection>
          <Present
            src="https://lottie.host/5c7de76b-7a6f-4a67-8f4f-ae878afc9920/21YjodIAg1.json"
            id="19"
            offsetX="0"
            offsetY="0"
            height="100"
            width="100"
          />
        </TreeSection>
        <TreeSection>
          <Present
            src="https://lottie.host/cb24d26f-5552-4644-8810-90faa9988734/Y2P43K5fyA.json"
            id="11"
            offsetX="10"
            offsetY="-20"
            height="80"
            width="80"
          />
          <Present
            src="https://lottie.host/5a391053-176c-446b-8d6e-06c26f6521f1/L4Bu7IHXNX.json"
            id="6"
            offsetX="-12"
            offsetY="-5"
            height="90.07"
            width="100.45"
          />
        </TreeSection>
        <TreeSection>
          <Present
            src="https://lottie.host/b0d6806a-f514-4e80-a442-1afe25dea8ea/GNQEkxmjqu.json"
            id="23"
            offsetX="20"
            offsetY="-40"
            height=""
            width=""
          />
          <Present
            src="https://lottie.host/a8e1c538-f06f-498d-8e63-9ea299ebf4e1/dugKs7XOGt.json"
            id="8"
            offsetX="5"
            offsetY="3"
            height=""
            width=""
          />
          <Present
            src="https://lottie.host/06c0091d-1f7a-4af0-bd07-3e604b56ba5d/YNUqgxXc5H.json"
            id="20"
            offsetX="0"
            offsetY="-40"
            height=""
            width=""
          />
        </TreeSection>
        <TreeSection>
          <Present
            src="https://lottie.host/7ec47a75-0475-4ed9-bfd9-506e59022a6a/3EjBW6lDaN.json"
            id="2"
            offsetX="0"
            offsetY="-60"
            height="76"
            width="76"
          />
          <Present
            src="https://lottie.host/f2edc222-a1bc-452c-a6aa-8b6e6e8203e5/O6T80BzrjX.json"
            id="15"
            offsetX="-10"
            offsetY="-50"
            height="90.96"
            width="93.5"
          />
          <Present
            src="https://lottie.host/e4657509-2322-49d2-ad10-3c790a005c66/LpQNnl5etp.json"
            id="1"
            offsetX="0"
            offsetY="-40"
            height="75.47"
            width="58.5"
          />
          <Present
            src="https://lottie.host/96d129f8-3e05-41f0-8043-d4891ddf6444/H88DGBOEb6.json"
            id="10"
            offsetX="-14"
            offsetY="-75"
            height="80"
            width="75.62"
          />
        </TreeSection>
        <TreeSection>
          <Present
            src="https://lottie.host/d0a5d8c1-fdba-41c0-9572-6d36945591f6/XtzySOONaT.json"
            id="22"
            offsetX="50"
            offsetY="-75"
            height="77"
            width="65.58"
          />
          <Present
            src="https://lottie.host/7468e4fd-5c30-4edd-9dff-dbd5e4df0a1f/hvEKTtTrEb.json"
            id="17"
            offsetX="40"
            offsetY="-55"
            height="100"
            width="90"
          />
          <Present
            src="https://lottie.host/b95a367a-b325-43bb-81e8-c42846eddb8d/aM3i60ftAB.json"
            id="5"
            offsetX="15"
            offsetY="-50"
            height="100"
            width="100"
          />
          <Present
            src="https://lottie.host/e8b8bc0c-167b-4286-a991-09c4b14c51a8/s1zTqBklq7.json"
            id="4"
            offsetX="-10"
            offsetY="-60"
            height="100"
            width="90"
          />
          <Present
            src="https://lottie.host/ad7c12cb-5add-4343-b38c-759b0e2a3a8e/bd2GyxcDgN.json"
            id="13"
            offsetX="-40"
            offsetY="-80"
            height="120"
            width="120"
          />
        </TreeSection>
        <TreeSection>
          <Present
            src="https://lottie.host/284aa806-ad8a-41ec-a2b0-2d9597643da3/XrSYPHT3s7.json"
            id="9"
            offsetX="10"
            offsetY="-120"
            height="100"
            width="90"
          />
          <Present
            src="https://lottie.host/1b36357d-4902-40ad-9c84-a6fedd8157a5/g5PWEne1WV.json"
            id="16"
            offsetX="-15"
            offsetY="-90"
            height="75.86"
            width="82"
          />
          <Present
            src="https://lottie.host/deab3c66-4100-43e6-aad9-7e3cb4645d9d/Ze4g6eAjZ9.json"
            id="18"
            offsetX="-10"
            offsetY="-90"
            height="80.19"
            width="77"
          />
          <Present
            src="https://lottie.host/859c117b-6e48-4891-926e-dcec4f324fd2/38wmyR2HMX.json"
            id="14"
            offsetX="-12"
            offsetY="-100"
            height="86"
            width="86"
          />
          <Present
            src="https://lottie.host/7e1e4b50-28f5-4af3-b95f-4fa02545b05b/ZAcU9QVyVR.json"
            id="21"
            offsetX="-20"
            offsetY="-70"
            height="51"
            width="75.62"
          />
        </TreeSection>
        <TreeSection>
          <Present
            src="https://lottie.host/6f929d97-3310-4651-964c-4af566836374/kHRVatIruI.json"
            id="3"
            offsetX="0"
            offsetY="-130"
            height="97.31"
            width="59"
          />
          <Present
            src="https://lottie.host/65ed3cca-bb61-4aeb-bbf1-f338812530a9/TDUnQCgymB.json"
            id="24"
            offsetX="15"
            offsetY="-115"
            height="93.61"
            width="222.27"
          />
          <Present
            src="https://lottie.host/7436dfbc-f679-427b-861b-451daf26f1ea/aSZsZeEJuc.json"
            id="7"
            offsetX="10"
            offsetY="-125"
            height="86.19"
            width="70.25"
          />
        </TreeSection>
        <Present
            src="https://lottie.host/91057d8f-832d-49eb-a6c7-67ca8e118b09/4K0HchApaR.json"
            id="12"
            offsetX="5"
            offsetY="-120"
            height="105.58"
            width="81"
          />
        <SantasHat><img src={SantaHatSvg} alt ="Santa's Hat to access filters"></img></SantasHat>
      </TreeContainer>
      {/*Footer containing extra lights*/}
      <Footer>
        {footerLights.map((light, i)=><div key={i}><Christmaslights height={Math.floor(Math.random()*72)}/></div>)}
      </Footer>
    </PageContainer>
    </WishProvider>
  )
}

export default App;