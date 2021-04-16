import { createContext, useState, FC, Dispatch, SetStateAction } from 'react'

import { User, userData } from '../../__data__/users'

export const UserContext = createContext<
  { users: User[]; setUsers: Dispatch<SetStateAction<User[]>> } | undefined
>(undefined)

export const UserContextProvider: FC = ({ children }) => {
  const [users, setUsers] = useState(userData)
  const contextValue = { users, setUsers }
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
