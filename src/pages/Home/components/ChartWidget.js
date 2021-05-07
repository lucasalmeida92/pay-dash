import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { parse, format } from 'date-fns'
import { ComposedChart, Line, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getSavings } from '../../../services/savings'

const Wrapper = styled.div`
  min-height: 400px;
  background-color: ${({ theme }) => theme.colors.lightGrey1 };
  border-radius: 48px;
  padding: 32px;
`
const ChartTitle = styled.h2`
  color: ${({ theme }) => theme.colors.lightGrey2 };
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
`
const CurrentValue = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.grey };
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
`
const ChartContainer = styled.div`
  width: calc(100% + 64px);
  margin: 0 -32px;
`

function convertDate(date) {
  const parsedDate = parse(date, 'MM-yyyy', new Date())
  console.log(parsedDate)
  return format(parsedDate, 'MMM')
}

function ChartWidget() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(getSavings())
  }, [])

  return (
    <Wrapper>
      <ChartTitle>Saved This Month</ChartTitle>
      <CurrentValue>$25,999.00</CurrentValue>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
          >
            <defs>
              <linearGradient id="gradientBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#252525" stopOpacity={0.35}/>
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <Tooltip/>
            <Area
              type="monotone"
              dataKey="amount"
              strokeWidth={6}
              fill="url(#gradientBg)"
              stroke="#14131d" />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Wrapper>
  )
}

export default ChartWidget
