import { keyframes } from 'styled-components'
import styled from 'styled-components'
import img from '../Images/background.png'

//making sure to be able to have varying ids and descriptions of the activities
type Activity = {
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

//styled container for the activities
const ActivityContainer = styled.div`
  background-image: url(${img});
  border-radius: 6px;
  z-index: 900;
  height: 240px;
  width: 320px;
  text-align: center;
  animation: ${scale} 2s;
`

const ActivityCard = ({activity}:{activity:Activity}) =>{
    return(
        <ActivityContainer>
            {/*adding the activity in a h2 element with padding*/}
            <h2 style={{paddingTop: '60px'}}>{activity.description}</h2>
        </ActivityContainer>
    )
}

export default ActivityCard;