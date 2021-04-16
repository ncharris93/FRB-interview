import { useContext } from 'react'

import { UserContext } from './user.context'

export const useUsers = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('Use within a LocalStorageContextProvider')
  }
  return context
}
