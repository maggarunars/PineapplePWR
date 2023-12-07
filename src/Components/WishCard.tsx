import { keyframes } from 'styled-components'
import styled from 'styled-components'
import img from '../Images/background.png'

//making sure to be able to have varying ids and descriptions of the wishes
type Wish = {
    id: number,
    description: string,
}

//creating the scale effect
const scale = keyframes`
    from {
        transform: scale(0.2, 0.2)
    }

    to {
        transform: scale(1, 1)
    }
`

//styled container for the wishes
const WishContainer = styled.div`
  background-image: url(${img});
  border-radius: 6px;
  z-index: 900;
  height: 240px;
  width: 320px;
  text-align: center;
  animation: ${scale} 2s;
`

const WishCard = ({wish}:{wish:Wish}) =>{
    return(
        <WishContainer>
            {/*adding the wish in a h2 element with padding*/}
            <h2 style={{paddingTop: '60px'}}>{wish.description}</h2>
        </WishContainer>
    )
}

export default WishCard;