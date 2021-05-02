import styled from 'styled-components'
import CardWidget from './components/CardWidget'
import UpcomingPaymentsWidget from './components/UpcomingPaymentsWidget'

const PageTitle = styled.h1`
  margin: 0 0 40px;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
`
const WidgetsWrapper = styled.div`
  display: grid;
  grid-template: 260px auto / 1fr 1.2fr 1.3fr;
  grid-template-areas: "card upcomingPayments chart"
                       "recentTransactions recentTransactions chart";
  grid-gap: 32px;
`
const CreditCard = styled.section`
  grid-area: card;
`
const UpcomingPayments = styled.section`
  grid-area: upcomingPayments;
`
const RecentTransactions = styled.section`
  grid-area: recentTransactions;
  background: rgba(0,0,0,.05);
`
const Chart = styled.section`
  grid-area: chart;
  background: rgba(0,0,0,.05);
  height: 600px;
`

function HomePage() {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <WidgetsWrapper>
        <CreditCard>
          <CardWidget></CardWidget>
        </CreditCard>
        <UpcomingPayments>
          <UpcomingPaymentsWidget />
        </UpcomingPayments>
        <RecentTransactions>RecentTransactions</RecentTransactions>
        <Chart>Chart</Chart>
      </WidgetsWrapper>
    </>
  )
}

export default HomePage
