import { createContext, useContext } from "react"

export const FooContext = createContext()
export const { Provider: FooContextProvider } = FooContext
export const useFooContext = () => useContext(FooContext)
