import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addclient } from '../reduxtoolkit/features/clients/clientsSlice'

const Form = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [document, setDocument] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState(false)

  const handleReset = () => {
    setName('')
    setDocument('')
    setAddress('')
    setPhone('')
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
      navigate('/clients')
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newUser = { name, document, address, phone }
    dispatch((addclient(newUser)))
    handleReset()
  }

  return (
    <>

      <div className='w-full flex h-screen bg-slate-800 items-center flex-col justify-center text-white'>
        <h1 className='font-poppins mb-5'>Nuevo Cliente</h1>

        <div className="w-full max-w-xs">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-poppins mb-2">
                Nombre del cliente
              </label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre del cliente" required />
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm font-poppins mb-2">
                Número de documento
              </label>
              <input value={document} onChange={(e) => setDocument(e.target.value)} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Número de documento" required />
              <label className="block text-black text-sm font-poppins mb-2">
                Dirección
              </label>
              <input value={address} onChange={(e) => setAddress(e.target.value)} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Dirección" required />
              <label className="block text-black text-sm font-poppins mb-2">
                Número de teléfono
              </label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Teléfono de telefono" required />
              {message === true ? <span className="text-green-700 text-center text-sm font-poppins flex justify-center mt-4">¡Cliente registrado exitosamente!</span> : null}
            </div>
            <div className="flex flex-col items-center justify-between">
              <button className="bg-slate-800 mb-4 hover:bg-slate-700 text-white text-sm font-poppins py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Registrar
              </button>
              <button onClick={() => navigate('/clients')} className="bg-slate-800 hover:bg-slate-700 text-sm text-white font-poppins py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Ver Todos Los Clientes
              </button>
            </div>
          </form>
        </div>
      </div>


    </>
  )
}

export default Form;