import styled from 'styled-components'
import { useTable } from 'react-table'

const TableStyles = styled.div`
  width: 100%;

  @media (max-width: ${({ minWidth }) => minWidth || '1px'}) {
    overflow-x: auto;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    min-width: ${({ minWidth }) => minWidth || 'auto'};

    thead {
      ${({ noHeader }) => noHeader && 'display: none;'}

      tr {
        border-radius: 8px 8px 0 0;
      }

      th {
        font-size: .9rem;
      }
    }

    th,
    td {
      margin: 0;
      padding: 8px;
      border-bottom: 1px solid #d9d9d9;

      :last-child {
        border-right: 0;
      }
    }

    tbody {
      tr {
        transition: all 200ms ease-out;

        td {
          height: 80px;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.lightGrey1 };
        }
      }
    }
  }
`

function Table({ columns, data, noHeader, minWidth }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    }
  )

  return (
    <TableStyles noHeader={noHeader} minWidth={minWidth}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyles>
  )
}

export default Table
