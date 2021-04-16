import { UserContext } from './user.context'
import { useContext } from 'react'

export const useUsers = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('Use within a LocalStorageContextProvider')
  }
  return context
}
