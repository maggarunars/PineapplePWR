import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { CSSProperties } from 'styled-components/dist/types'

const ChristmasWindowClosed = () =>{
    const packageStyle:CSSProperties = {
        height: '80px', width: '80px', position: 'absolute'
    }
    
    return (
        <div><Player src="https://lottie.host/c47df01e-6f3d-4b08-a35c-a7ba89e974b4/8tujcNBQeq.json" id = "1" style={{...packageStyle, left: 180, top: 326, height: '148.48px', width: '122.89px'}} loop autoplay> </Player></div>
    )
}

export default ChristmasWindowClosed