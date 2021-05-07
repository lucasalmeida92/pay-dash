import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { parse, format } from 'date-fns'
import {
  ComposedChart,
  ReferenceDot,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getSavings } from '../../../services/savings'
import { usdFormatter } from '../../../utils/currencyFormatter'

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
  margin: 24px -32px;
`
const TooltipWrapper = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.dark };
  color: white;
  font-weight: 700;
  border-radius: 16px;
  padding: 8px 12px;
  border: 0;
`

function convertDate(date) {
  const parsedDate = parse(date, 'MM-yyyy', new Date())
  return format(parsedDate, 'MMM')
}

function CustomTooltip({ changeCurrentValue, active, payload, label}) {
  if (active && payload && payload.length) {
    changeCurrentValue(payload[0].value)

    return (
      <TooltipWrapper>{convertDate(label)}</TooltipWrapper>
    )
  }

  return null
}

function ChartWidget() {
  const [data, setData] = useState([])
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const savings = getSavings()

    setData(getSavings())
    setCurrentValue(savings[savings.length-1].amount)
  }, [])

  return (
    <Wrapper>
      <ChartTitle>Saved This Month</ChartTitle>
      <CurrentValue>{usdFormatter.format(currentValue)}</CurrentValue>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
              height={300}
              data={data}
              margin={{left: 0, right: 0}}
          >
            <defs>
              <linearGradient id="gradientBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#252525" stopOpacity={0.35}/>
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.0}/>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={convertDate}
            />
            <Tooltip content={<CustomTooltip changeCurrentValue={setCurrentValue} />} />
            <Area
              type="monotone"
              dataKey="amount"
              strokeWidth={6}
              fill="url(#gradientBg)"
              stroke="#14131d"
              activeDot={{ stroke: 'white', strokeWidth: 6, r: 9 }}
            />
            {/* <ReferenceDot x={200} y={40} r={9} fill="#14131d" stroke="white" strokeWidth={6} isFront /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Wrapper>
  )
}

export default ChartWidget
