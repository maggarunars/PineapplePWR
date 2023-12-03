import {Green, Pink, Blue, Yellow, Purple, Red} from './LightStyles'

type Props = {
	height:number
}

// Dots for the christmas lights
const Christmaslights = ({height}:Props) => {
/*Randomizing what colors are on the dots */
	const colors =[ Green, Blue, Purple, Yellow, Pink, Red ]
	const Light = colors[Math.floor(Math.random()*colors.length)]
    return (
    	<>
			<Light
				$rLeft={Math.floor(Math.random()*window.innerWidth)}
				$rRight={height}
				$rTime={Math.random()*4+2}>
			</Light>
		</>
    )
}

export default Christmaslights;