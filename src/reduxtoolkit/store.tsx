import { configureStore } from '@reduxjs/toolkit'
import clientsSlice from '../reduxtoolkit/features/clients/clientsSlice'

export const store = configureStore({
  reducer: {
    clients: clientsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch