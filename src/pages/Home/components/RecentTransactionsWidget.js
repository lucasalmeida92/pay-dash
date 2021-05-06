import  { useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiGift, BiRun, BiCloset, BiBasket, BiCar } from 'react-icons/bi'
import Table from '../../../components/Table'
import DropdownMenu from '../../../components/DrowpdownMenu'

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

const recentTransactions = [
  {
    id: 1,
    title: 'Shopping',
    category: 'shopping',
    createdAt: 'Wed May 05 2021 20:57:33 GMT-0300',
    price: '300',
  },
  {
    id: 2,
    title: 'Grocery',
    category: 'grocery',
    createdAt: 'Wed May 05 2021 14:57:33 GMT-0300',
    price: '45',
  },
  {
    id: 3,
    title: 'Gym',
    category: 'physicalActivity',
    createdAt: 'Wed May 04 2021 20:57:33 GMT-0300',
    price: '125',
  },
  {
    id: 4,
    title: 'Laundry',
    category: 'laundry',
    createdAt: 'Wed May 04 2021 20:57:33 GMT-0300',
    price: '90',
  },
  {
    id: 5,
    title: 'Car Repair',
    category: 'car',
    createdAt: 'Wed May 02 2021 20:57:33 GMT-0300',
    price: '250',
  },
]

function RecentTransactionsWidget() {
  const [transactionsData, setTransactionsData] = useState(recentTransactions)

  return (
    <>
      <h1>Recent Transactions</h1>
      <TableWrapper>
        <Table columns={columns} data={transactionsData} noHeader minWidth="420px" />
      </TableWrapper>
    </>
  )
}

export default RecentTransactionsWidget
