import { useState } from 'react'
import styled from 'styled-components'
import CreditCard from '../../../components/CreditCard'

const Wrapper = styled.div`
  position: relative;
  height: 200px;
  cursor: pointer;
`
const CustomCreditCard = styled(CreditCard)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.15;

  &:first-child {
    z-index: 3;
    opacity: 1;

    &:hover {
      transform: scale(1.01) rotate(2deg) translateY(-5px) translateX(-2px);
      box-shadow: 3px 6px 10px 0 rgba(0,0,0,.2);
    }
  }

  &:nth-child(2) {
    z-index: 2;
    top: 22px;
    transform: scale(0.87);
  }
  &:nth-child(3) {
    z-index: 1;
    top: 50px;
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
  {
    number: '9988 0091 1178 7722',
    holder: 'Bruce Wayne',
    flagImage: '/images/visa-logo.png',
    flagName: 'Visa',
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
    <>
      <h1>My Cards</h1>
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
    </>
  )
}

export default CardWidget
