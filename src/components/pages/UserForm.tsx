import { FC } from 'react'
import { makeStyles, Theme, Input, TextField } from '@material-ui/core'

import { User } from '../../__data__/users'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useUsers } from '../../hooks/Users/useUsers'
import _ from 'lodash'

export const UserForm: FC<{ user?: User }> = ({ user }) => {
  const classes = useUserFormStyles()

  const history = useHistory()

  //@ts-ignore
  user = user || history.location.state

  const { handleSubmit, control } = useForm<User>({
    //@ts-ignore
    defaultValues: { ...user },
  })

  const { users, setUsers } = useUsers()
  const onSubmit = (data: User) => {
    if (!user) {
      setUsers(users => users.concat(data))
    } else {
      setUsers(
        _.map(users, u => {
          if (u.firstName === data.firstName) {
            return data
          }
          return u
        })
      )
    }

    history.goBack()
  }

  return (
    <form
      data-testid="user-form"
      className={classes.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="First Name" />}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Last Name" />}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Phone" />}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Email" />}
      />
      <div className={classes.space} />
      <Input type="submit" />
    </form>
  )
}

const useUserFormStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  space: { marginTop: 20 },
}))
