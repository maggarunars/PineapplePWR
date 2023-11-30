import styled from "styled-components"

type Wish = {
    id: number,
    description: string,
}

// const WishesCard
const Container = styled.div`
  width: 100%;
  padding: 10px;
  background: yellow;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  
`
const WishCard = ({wish}:{wish:Wish}) =>{
    return(
        <Container>
            <h3>{wish.description}</h3>

        </Container>
    )
}

export default WishCard