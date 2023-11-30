import styled, {keyframes} from "styled-components"
// Dots for the christmas lights
const Christmaslights = () => {
const blink = keyframes `
0% { background-color: #FFFFFF; opacity: 0; }
50% { opacity: 1; }
100% { opacity: 0; }
`
const Dot = styled.div`
	position: absolute;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	/* below is the line that makes that makes the lights spread randomly accross the screen using the width and height of the screen */
	transform: translate(${Math.floor(Math.random()*window.innerWidth)}px, ${Math.floor(Math.random()*window.innerHeight)}px);
	animation: ${blink} ${Math.random()*4+1}s linear infinite;
	/* filter: blur(4px); */
`
/* colors of the christmas lights */
const Green = styled(Dot)`
background-color:#3E5227; 
`
const Pink = styled(Dot)`
background-color:#F69FF3; 
`
const Blue = styled(Dot)`
background-color:#6BBAE7; 
`
const Yellow = styled(Dot)`
background-color:#F7D137; 
`
const Purple = styled(Dot)`
background-color:#8C43B7; 
`
const Red = styled(Dot)`
background-color:#F7505A; 
`
/* randomizing what colors are on the dots */
	const colors =[ Green, Blue, Purple, Yellow, Pink, Red ]
	const Light = colors[Math.floor(Math.random()*colors.length)]
    return (
        <>
		<Light></Light>
		</>
    )
}
export default Christmaslights

