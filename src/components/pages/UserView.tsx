import { FC } from 'react'
import { Button, makeStyles, Theme, TextField } from '@material-ui/core'
import { useHistory } from 'react-router'
import { User } from '../../__data__/users'
import _ from 'lodash'

export const UserView: FC<{ user?: User }> = ({ user }) => {
  const classes = useUserViewStyles()
  const history = useHistory<User>()

  user = user || history.location.state
  console.log('🚀 ~ file: UserView.tsx ~ line 11 ~ user', user)

  return (
    <div data-testid="user-view" className={classes.container}>
      {_.map(user, (value, key) => {
        //@ts-ignore
        return <TextField label={key} value={value} disabled />
      })}

      <Button onClick={history.goBack}>Back</Button>
    </div>
  )
}

const useUserViewStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
}))
