import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { useWish } from "./WishContext";

type Props = {
    src:string;
    id:string;
    offsetX:string;
    offsetY:string;
    height:string;
    width:string;
}

const WishId = styled.span`
position: absolute;
width: 1px;
height: 1px;
margin: -1px;
padding 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
`

const WishStyle = styled.div`
cursor: grab;
`

const Present = ({src, id, offsetX, offsetY, height, width}:Props) => {
    const {handleOpenWish} = useWish();

    return (
        <>
            <WishStyle onClick={() => handleOpenWish()} style={{height:`${height}px`, width:`${width}px`, transform: `translate(${offsetX}px, ${offsetY}px)`}}>
                <Player src={src} id={id} loop autoplay></Player>
                <WishId>Package number {id}. Click to open.</WishId>
            </WishStyle>
        </>
    )
}

export default Present;