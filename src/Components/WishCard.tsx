import styled from "styled-components"

type Wish = {
    id: number,
    description: string,
}

// const WishesCard
const Container = styled.div`
  padding: 10px;
  background: yellow;
  border-radius: 6px;
  position: absolute;
  z-index: 900;
  margin: auto;
`

const WishCard = ({wish}:{wish:Wish}) =>{
    return(
        <Container>
            <h3>{wish.description}</h3>
        </Container>
    )
}

export default WishCard;