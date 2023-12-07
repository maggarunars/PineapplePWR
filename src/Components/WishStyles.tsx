import styled from "styled-components";

type Props = {
    src:string;
    id:string;
    offsetX:string;
    offsetY:string;
    height:string;
    width:string;
}

const Present = ({src, id, offsetX, offsetY, height, width}:Props) => {
    const WishStyle = styled.div`
    cursor: grab;
    height:{height};
    width:{width};
    transform: translate({offsetX}, {offsetY});
`
}