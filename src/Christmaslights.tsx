import styled from "styled-components"

const Christmaslights = () => {
const Dot = styled.div`
	position: absolute;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	transform: translate(${Math.floor(Math.random()*window.innerWidth)}px, ${Math.floor(Math.random()*window.innerHeight)}px)
`

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

const colors =[ Green, Blue, Purple, Yellow, Pink, Red ]
const Light = colors[Math.floor(Math.random()*colors.length)]
	return (
        <>
		<Light></Light>
		</>
    )
}

export default Christmaslights