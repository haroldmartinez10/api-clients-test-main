import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import type { RootState } from '../reduxtoolkit/store'
import { useSelector, useDispatch } from 'react-redux'
import { getclients, deleteclient } from '../reduxtoolkit/features/clients/clientsSlice'
import Searchbar from './Searchbar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { stylemodal } from '../material-ui/stylemodal';

interface clientsState { name: string, document: number, address: string, phone: number, _id: string }

const Clients = () => {
  const [nameEdit, setNameEdit] = useState<string>('')
  const [documentEdit, setDocumentEdit] = useState<number>(0)
  const [addressEdit, setAddressEdit] = useState<string>('')
  const [phoneEdit, setPhoneEdit] = useState<number>(0)
  const [idEdit, setIdEdit] = useState<string>('')

  // MODAL STATE//
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //MODAL STATE//
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const clients = useSelector((state: RootState) => state.clients.value)

  useEffect(() => {
    const getClients = async () => {
      const data = await fetch('http://localhost:3000/clients')
      const clients = await data.json()
      dispatch(getclients(clients))
    }
    getClients()
  }, [])

  const handleDelete = (id: string) => {
    dispatch(deleteclient(id))
    window.location.reload();
  }

  const handleEdit = (client: clientsState) => {
    handleOpen()
    setNameEdit(client.name)
    setDocumentEdit(client.document)
    setAddressEdit(client.address)
    setPhoneEdit(client.phone)
    setIdEdit(client._id)
  }

  const handleConfirmEdit = async () => {
    const editUserConfirm: clientsState = {
      name: nameEdit,
      document: documentEdit,
      address: addressEdit,
      phone: phoneEdit,
      _id: idEdit,
    }
    await fetch(`http://localhost:3000/clients/${idEdit}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUserConfirm)
    })
  }


  return (

    <div className='w-full flex bg-slate-800 items-center flex-col justify-center text-white mt-10'>
      <Searchbar />
      <button>
        <ReplyAllRoundedIcon onClick={() => navigate('/')} className="mb-10" />
      </button>
      <div className="text-center mb-4  font-poppins">
        {clients.length > 0 ? <h1>Numero de clientes registrados ({clients.length})</h1> : <h1>No hay clientes registrados</h1>}
      </div>

      {clients.map((client) => (
        <List key={client._id} className="text-black" sx={{ width: "100%", maxWidth: 360, bgcolor: 'white', }} aria-label="contacts">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon onClick={() => handleEdit(client)} />
              </ListItemIcon>
              <ListItemText inset primary={<span className="font-poppins text-xs">{client.name}</span>} />
              <ListItemIcon >
                <DeleteForeverIcon onClick={() => handleDelete(client._id)} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={stylemodal}>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <h1 className='text-black text-center mb-4 font-poppins'>Editar Cliente</h1>
                  <div className="mb-4">
                    <label className="block text-black text-sm font-poppins mb-2">
                      Nombre del cliente
                    </label>
                    <input value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-black text-sm font-poppins mb-2">
                      Número de documento
                    </label>
                    <input value={`${documentEdit}`} onChange={(e) => setDocumentEdit(Number(e.target.value))} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" />
                    <label className="block text-black text-sm font-poppins mb-2">
                      Dirección
                    </label>
                    <input value={String(addressEdit)} onChange={(e) => setAddressEdit(e.target.value)} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    <label className="block text-black text-sm font-poppins mb-2">
                      Número de teléfono
                    </label>
                    <input value={`${phoneEdit}`} onChange={(e) => setPhoneEdit(Number(e.target.value))} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" />
                    <h1 className='font-poppins text-xs'>Id: {idEdit}</h1>
                  </div>

                  <div className="flex flex-col items-center justify-between">

                    <button onClick={handleConfirmEdit} className="bg-slate-800 mb-4 hover:bg-slate-700 text-white text-sm font-poppins py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Editar
                    </button>
                    <button onClick={() => handleClose()} className="bg-red-800 mb-4 hover:bg-red-700 text-white text-sm font-poppins py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Salir
                    </button>
                  </div>
                </form>
              </Box>
            </Modal>
          </div>

          <div>
          </div>
        </List>
      ))
      }


    </div >




  )
}

export default Clients;