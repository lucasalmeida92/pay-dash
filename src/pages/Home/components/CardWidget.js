import styled from 'styled-components'
import CreditCard from '../../../components/CreditCard'

const Wrapper = styled.div`
  position: relative;
`


function CardWidget() {
  return (
    <Wrapper>
      <CreditCard
        number="4562 1122 4595 7852"
        holder="Ghulam Rasool"
        flagName="Mastercard"
      />
    </Wrapper>
  )
}

export default CardWidget
