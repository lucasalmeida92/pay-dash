import { useState } from 'react'
import styled from 'styled-components'
import CreditCard from '../../../components/CreditCard'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
`
const CustomCreditCard = styled(CreditCard)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;

  &:first-child {
    z-index: 3;
    opacity: 1;
  }

  &:nth-child(2) {
    z-index: 2;
    top: 22px;
    transform: scale(0.87);
  }
  &:nth-child(3) {
    z-index: 1;
    top: 52px;
    transform: scale(0.67);
  }
`

const cardsArray = [
  {
    number: '4562 1122 4595 7852',
    holder: 'Ghulam Rasool',
    flagImage: '/images/mastercard-logo.webp',
    flagName: 'Mastercard',
  },
  {
    number: '2388 0091 1178 7722',
    holder: 'Lucas Almeida',
    flagImage: '/images/visa-logo.png',
    flagName: 'Visa',
  },
  {
    number: '5544 2222 0987 4433',
    holder: 'Fulano da Silva',
    flagImage: '/images/mastercard-logo.webp',
    flagName: 'Mastercard',
  },
]

function CardWidget() {
  const [cards, setCards] = useState(cardsArray)

  function rotateCards() {
    const cardsClone = [...cards]

    cardsClone.push(cardsClone.shift())
    setCards(cardsClone)
  }

  return (
    <Wrapper onClick={rotateCards}>
      {cards.map(card => (
        <CustomCreditCard
          key={card.number}
          number={card.number}
          holder={card.holder}
          flagImage={card.flagImage}
          flagName={card.flagName}
        />
      ))}
    </Wrapper>
  )
}

export default CardWidget
