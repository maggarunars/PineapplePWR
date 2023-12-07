import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { useActivity } from "./ActivityContext";

type Props = {
    src:string;
    id:string;
    offsetX:string;
    offsetY:string;
    height:string;
    width:string;
}

const ActivityId = styled.span`
position: absolute;
width: 1px;
height: 1px;
margin: -1px;
padding 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
`

const ActivityStyle = styled.div`
cursor: grab;
`

const Present = ({src, id, offsetX, offsetY, height, width}:Props) => {
    const {handleOpenActivity} = useActivity();

    return (
        <>
            <ActivityStyle onClick={() => handleOpenActivity()} style={{height:`${height}px`, width:`${width}px`, transform: `translate(${offsetX}px, ${offsetY}px)`}}>
                <Player src={src} id={id} loop autoplay></Player>
                <ActivityId>Package number {id}. Click to open.</ActivityId>
            </ActivityStyle>
        </>
    )
}

export default Present;