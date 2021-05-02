import styled from 'styled-components'

const Wrapper = styled.div`
  z-index: 3;
  display: grid;
  grid-template: 1fr 1fr 2fr / 1fr 1fr;
  grid-template-areas: "chip chip"
                       "number number"
                       "holder flag";
  width: 100%;
  height: 100%;
  min-width: 250px;
  padding: 24px;
  background: linear-gradient(45deg, #363435 10%, 20%, #222 90%);
  border-radius: 32px;
  transition: all 200ms ease-out;
  color: #fff;
`
const Chip = styled.span`
  grid-area: chip;
`
const Number = styled.span`
  grid-area: number;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`
const Holder = styled.div`
  grid-area: holder;
  align-self: end;

  small {
    font-size: 0.4rem;
    color: ${({ theme }) => theme.colors.lightGrey3};
  }
  p {
    font-size: 0.7rem;
    font-weight: 700;
    margin: 8px 0 0;
  }
`
const Flag = styled.div`
  grid-area: flag;
  align-self: end;
  justify-self: end;

  img {
    opacity: 0.8;
  }

  p {
    font-size: 0.6rem;
    font-weight: 700;
    margin: 8px 0 0;
  }
`

function CreditCard({ number, holder, flagName }) {
  return (
    <Wrapper>
      <Chip>
        <img src="/images/card-chip.png" alt="Card chip" />
      </Chip>
      <Number>{ number }</Number>
      <Holder>
        <small>CARD HOLDER</small>
        <p>{ holder }</p>
      </Holder>
      <Flag>
        <img src="/images/mastercard-logo.webp" alt="Mastercard Logo" width="60px" />
        <p>{ flagName }</p>
      </Flag>
    </Wrapper>
  )
}

export default CreditCard
