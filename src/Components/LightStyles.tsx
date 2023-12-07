import styled, { keyframes } from 'styled-components'

//creating the blinking effect
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

//adding each colour to be used and making the blinking effect random for each dot
const Green = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#3E5227;
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Pink = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#F69FF3;
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Blue = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#6BBAE7;
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Yellow = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#F7D137;
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Purple = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#8C43B7;
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

const Red = styled(Dot)<{ $rLeft?: number; $rRight?: number; $rTime?: number }>`
	background-color:#F7505A;
	animation: ${blink} ${props => props.$rTime}s linear infinite;
`

export {Green, Pink, Blue, Yellow, Purple, Red};