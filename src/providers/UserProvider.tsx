'use client'

import { MyUserContextProvider } from "@/hooks/useUsers/useUsers"

interface UserProviderProps{
    children :React.ReactNode
}

export const UserProvider:React.FC<UserProviderProps> = ({children}) => {
  return (
  <MyUserContextProvider>
    {children}
    </MyUserContextProvider>
  )
}
