import styled, {keyframes} from 'styled-components'

//adding the blinking effect
const blink = keyframes`
    0% { background-color: #FFFFFF; opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`

//styling the dots
const Dot = styled.div`
	position: absolute;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	/* filter: blur(2px); */
`

//adding each colour to be used
const Green = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#3E5227;
	/* below is the line that makes that makes the lights spread randomly accross the screen using the width and height of the screen */
	transform: translate(${props => props.$rLeft}px, ${props => props.$rRight}px);
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Pink = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#F69FF3;
	transform: translate(${props => props.$rLeft}px, ${props => props.$rRight}px);
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Blue = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#6BBAE7;
	transform: translate(${props => props.$rLeft}px, ${props => props.$rRight}px);
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Yellow = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#F7D137;
	transform: translate(${props => props.$rLeft}px, ${props => props.$rRight}px);
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Purple = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#8C43B7;
	transform: translate(${props => props.$rLeft}px, ${props => props.$rRight}px);
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Red = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#F7505A;
	transform: translate(${props => props.$rLeft}px, ${props => props.$rRight}px);
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

export {Green, Pink, Blue, Yellow, Purple, Red};