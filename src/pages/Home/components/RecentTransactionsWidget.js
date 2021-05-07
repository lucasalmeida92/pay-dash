import  { useState, useEffect } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import ReactTooltip from 'react-tooltip'
import { BsThreeDotsVertical, BsChevronDown, BsArrowDown } from 'react-icons/bs'
import { BiGift, BiRun, BiCloset, BiBasket, BiCar } from 'react-icons/bi'
import Table from '../../../components/Table'
import DropdownMenu from '../../../components/DrowpdownMenu'
import { getRecentTransactions } from '../../../services/transactions'

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    flex: 1;
    margin: 0;
  }
`
const SelectArrow = styled(BsChevronDown)`
  grid-area: select;
  justify-self: end;
  font-size: 14px;
  margin-right: 11px;
`
const SelectWrapper = styled.label`
  flex: 0;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  width: 100%;
  min-width: 140px;
  height: fit-content;
  border: 1px solid #e0e5ee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 200ms ease-out;

  select {
    z-index: 2;
    grid-area: select;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 8px 24px 8px 16px;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.lightGrey2 };
    cursor: inherit;
    line-height: inherit;
    outline: none;

  }

  &:hover  {
    select {
      color: ${({ theme }) => theme.colors.grey };
    }
  }

  &:focus-within  {
    border-color: ${({ theme }) => theme.colors.lightGrey2 };

    select {
      color: ${({ theme }) => theme.colors.grey };
    }
  }

`
const OrderButton = styled.button`
  flex: 0;
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 4px;
  transition: all 200ms ease-out;

  &:before {
    content: ${({isAscSorting}) => isAscSorting ? `'A'` : `'Z'`};
    position: absolute;
    top: calc(50% - 16px);
    right: 0;
    color: ${({ theme }) => theme.colors.lightGrey2 };
    transition: all 150ms ease-out;
  }
  &:after {
    content: ${({isAscSorting}) => isAscSorting ? `'Z'` : `'A'`};
    position: absolute;
    bottom: calc(50% - 15px);
    right: 0;
    color: ${({ theme }) => theme.colors.lightGrey2 };
    transition: all 150ms ease-out;
  }

  &:hover {
    &:before, &:after {
      color: ${({ theme }) => theme.colors.grey };
    }
  }
  &:active {
    transform: scale(0.9);
    transition-duration: 0ms;
  }
`
const TableWrapper = styled.div`
  position: relative;

  .category-icon {
    font-size: 28px;
  }

  @media (max-width: 460px) {
    &:before {
      opacity: 0.8;
      content: '';
      display: block;
      box-shadow: inset 17px -11px 12px 0 white;
      position: absolute;
      left: -14px;
      right: 0;
      width: 24px;
      height: 100%;
    }
    &:after {
      opacity: 0.8;
      content: '';
      display: block;
      box-shadow: inset -17px -11px 12px 0 white;
      position: absolute;
      top: 0;
      right: -14px;
      width: 24px;
      height: 100%;
    }
  }
`
const TransactionTitle = styled.span`
  font-weight: 700;
  font-size: 1rem;
`
const TransactionDate = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey2 };
  font-size: 0.95rem;
`
const TransactionPrice = styled(TransactionTitle)`
  font-weight: 700;
  font-size: 1.1rem;
`
const OptionsDropdownMenu = styled(DropdownMenu)`
  text-align: right;
`
const OptionsButton = styled.button`
  width: 36px;
  height: 36px;
  line-height: 41px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.lightGrey3 };

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey2 };
  }
`

const categoriesIcons = {
  shopping: BiGift,
  grocery: BiBasket,
  physicalActivity: BiRun,
  laundry: BiCloset,
  car: BiCar,
}

const columns = [
  {
    Header: 'CategoryIcon',
    accessor: data => {
      const Icon = categoriesIcons[data.category]
      return Icon && <Icon className="category-icon" />
    },
  },
  {
    Header: 'Title',
    accessor: ({ title }) => <TransactionTitle>{title}</TransactionTitle>,
  },
  {
    Header: 'DateTime',
    accessor: ({ createdAt }) =>
      <TransactionDate>
        {createdAt && format(new Date(createdAt), 'dd MMM yyyy HH:mm')}
      </TransactionDate>,
  },
  {
    Header: 'Price',
    accessor: ({ price }) => <TransactionPrice>${price || '-'}</TransactionPrice>,
  },
  {
    Header: 'OptionsMenu',
    accessor: ({ id, title }) => (
      <OptionsDropdownMenu
        openButton={
          <OptionsButton>
            <BsThreeDotsVertical />
          </OptionsButton>
        }
        top="0"
        right="42px"
      >
        <li><button onClick={() => alert(`${id} - ${title}`)}>Apple pay</button></li>
        <li><button onClick={() => alert(`${id} - ${title}`)}>Transfer to account</button></li>
        <li><button onClick={() => alert(`${id} - ${title}`)}>Report for transaction</button></li>
      </OptionsDropdownMenu>
    ),
  },
]

function RecentTransactionsWidget() {
  const [transactionsData, setTransactionsData] = useState([])
  const [isAscSorting, setIsAscSorting] = useState(false)
  const [sortFilter, setSortFilter] = useState('')

  useEffect(() => {
    ReactTooltip.rebuild()
  })

  useEffect(() => {
    setTransactionsData(getRecentTransactions())
  }, [])

  useEffect(() => {
    transactionsData.length && sortTransactions()
  }, [sortFilter, isAscSorting])

  function sortTransactions() {
    const dataCopy = [...transactionsData]
    const filters = {
      '': (a, b) => new Date(a['createdAt']) - new Date(b['createdAt']),
      title: (a, b) => a['title'] > b['title'] ? 1 : -1,
      createdAt:
      (a, b) => new Date(a['createdAt']) - new Date(b['createdAt']),
      price: (a, b) => a['price'] > b['price'] ? 1 : -1,
    }

    setTransactionsData(
      dataCopy.sort(
        (a, b) => filters[sortFilter](a, b, sortFilter) * (isAscSorting ? 1 : -1)
      )
    )
  }

  return (
    <>
      <SectionHeader>
        <h1>Recent Transactions</h1>
        <SelectWrapper>
          <select defaultValue={sortFilter} onChange={(e) => setSortFilter(e.target.value)}>
            <option value="" disabled>Sort by</option>
            <option value="title">Title</option>
            <option value="createdAt">Date</option>
            <option value="price">Price</option>
          </select>
          <SelectArrow />
        </SelectWrapper>
        <OrderButton
          onClick={() => setIsAscSorting(!isAscSorting)}
          isAscSorting={isAscSorting}
          key={isAscSorting ? 'asc' : 'desc'}
          data-tip={isAscSorting ? 'Change to Descending' : 'Change to Ascending'}
        >
          <BsArrowDown size="28px" />
        </OrderButton>
        <ReactTooltip />
      </SectionHeader>
      <TableWrapper>
        <Table columns={columns} data={transactionsData} noHeader minWidth="420px" />
      </TableWrapper>
    </>
  )
}

export default RecentTransactionsWidget
