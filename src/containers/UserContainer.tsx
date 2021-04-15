import React, { FC, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import _ from 'lodash'

import { userData } from '../__data__/users'
import { UserTable } from '../components/organisms/UserTable'

export const UserContainer: FC = () => {
  const [users, setUsers] = useState(userData)
  const classes = useUserContainerStyles()
  return (
    <div data-testid="user-container" className={classes.container}>
      <UserTable users={users} />
    </div>
  )
}

const useUserContainerStyles = makeStyles((theme: Theme) => ({
  container: {},
}))
