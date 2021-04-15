import { VFC } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import { useTable, Column } from 'react-table'

import { User } from '../../__data__/users'

const columns: Column<User>[] = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
]

export const UserTable: VFC<{ users: User[] }> = ({ users }) => {
  const classes = useUserTableStyles()

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: users,
  })

  return (
    <div data-testid="user-table" className={classes.container}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const useUserTableStyles = makeStyles((theme: Theme) => ({
  container: {},
}))
