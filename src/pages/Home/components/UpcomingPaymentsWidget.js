import styled from 'styled-components'
import { BsBriefcase } from "react-icons/bs"
import { RiPaypalLine } from "react-icons/ri"

const Payment = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(50% - 12px);
  height: 200px;
  border-radius: 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.lightGrey1};
  text-align: center;

  &:first-child {
    margin-right: 24px;
  }
`
const PaymentTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grey};
`
const PaymentDescription = styled.p`
  margin: -8px 0 8px;
  color: ${({ theme }) => theme.colors.lightGrey2};
  font-size: 0.8rem;
`
const PaymentAmount = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
`
const Icon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
`

function UpcomingPaymentsWidget() {

  return (
    <>
      <h1>Upcoming Payments</h1>
      <div>
        <Payment>
          <Icon>
            <BsBriefcase className="icon" color="white" size="32px" />
          </Icon>
          <PaymentTitle>Salary</PaymentTitle>
          <PaymentDescription>Belong interactive</PaymentDescription>
          <PaymentAmount>+$2000</PaymentAmount>
        </Payment>
        <Payment>
          <Icon>
            <RiPaypalLine className="icon" color="white" size="32px" />
          </Icon>
          <PaymentTitle>Paypal</PaymentTitle>
          <PaymentDescription>Freelance payment</PaymentDescription>
          <PaymentAmount>+$45</PaymentAmount>
        </Payment>
      </div>
    </>
  )
}

export default UpcomingPaymentsWidget
