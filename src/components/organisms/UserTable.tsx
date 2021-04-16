import {
  Button,
  IconButton,
  makeStyles,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
} from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import { useMemo, useState, VFC } from 'react'
import { useHistory } from 'react-router'
import { Cell, Column, useTable } from 'react-table'

import { User } from '../../__data__/users'

export const UserTable: VFC<{ users: User[] }> = ({ users }) => {
  const classes = useUserTableStyles()
  const history = useHistory<User>()
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const columns: Column<User>[] = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        minWidth: 200,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        minWidth: 200,
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        minWidth: 400,
      },
      {
        Header: 'Email',
        accessor: 'email',
        minWidth: 400,
      },
      {
        Header: 'Actions',
        Cell: (data: Cell) => {
          return (
            <div className={classes.actionCell}>
              <IconButton
                onClick={e => {
                  setSelectedUser(data.row.original as User)
                  setAnchorEl(e.currentTarget)
                }}
              >
                <MoreHoriz />
              </IconButton>
            </div>
          )
        },
      },
    ],
    [classes.actionCell]
  )

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
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <Popover
        open={!!anchorEl}
        onClose={() => {
          setAnchorEl(null)
        }}
        anchorEl={anchorEl}
      >
        <Button
          onClick={() => {
            history.push('/user-view', selectedUser)
          }}
        >
          View
        </Button>
        <Button
          onClick={() => {
            history.push('/user-form', selectedUser)
          }}
        >
          Update
        </Button>
        <Button
          onClick={() => {
            history.push('/user-form')
          }}
        >
          Create
        </Button>
      </Popover>
    </div>
  )
}

const useUserTableStyles = makeStyles((theme: Theme) => ({
  container: { backgroundColor: 'white', borderRadius: 5, width: '80%' },
  actionCell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
