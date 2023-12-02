import { keyframes } from 'styled-components'
import styled from 'styled-components'
import img from '../Images/background.png'

type Wish = {
    id: number,
    description: string,
}

const scale = keyframes`
    from {
        transform: scale(0.2, 0.2)
    }

    to {
        transform: scale(1, 1)
    }
`

const Container = styled.div`
  background-image: url(${img});
  border-radius: 6px;
  z-index: 900;
  height: 240px;
  width: 320px;
  text-align: center;
  animation: ${scale} 2s
`

const WishCard = ({wish}:{wish:Wish}) =>{
    return(
        <Container>
            <h2 style={{paddingTop: '60px'}}>{wish.description}</h2>
        </Container>
    )
}

export default WishCard;