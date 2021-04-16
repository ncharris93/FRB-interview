import { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core'

import { UserTable } from '../components/organisms/UserTable'
import { useUsers } from '../hooks/Users/useUsers'

export const UserContainer: FC = () => {
  const { users } = useUsers()
  const classes = useUserContainerStyles()
  return (
    <div data-testid="user-container" className={classes.container}>
      <UserTable users={users} />
    </div>
  )
}

const useUserContainerStyles = makeStyles((theme: Theme) => ({
  container: { width: '80vw' },
}))
