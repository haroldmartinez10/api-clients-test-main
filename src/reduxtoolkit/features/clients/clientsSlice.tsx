import { createSlice } from '@reduxjs/toolkit'

const adduser = async (newuser: object) => {
    await fetch(`http://localhost:3000/clients/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newuser)
    })
}

const deleteuser = async (id: string) => {
    await fetch(`http://localhost:3000/clients/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application.json' }
    })
}


export interface clientsState {
    value: Array<{ name: string, document: number, address: string, phone: number, _id: string }>
}


const initialState: clientsState = {
    value: []
}

export const clientsSlice = createSlice({

    name: 'clients',
    initialState,
    reducers: {
        getclients: (state, action) => {
            state.value = action.payload
        },
        addclient: (_, action) => {
            adduser(action.payload)
        },
        deleteclient: (_, action) => {
            deleteuser(action.payload)
        }
    },
})

export const { getclients, addclient, deleteclient } = clientsSlice.actions

export default clientsSlice.reducer