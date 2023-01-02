import { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import type { RootState } from '../reduxtoolkit/store'
import { useSelector, useDispatch } from 'react-redux'
import { deleteclient } from '../reduxtoolkit/features/clients/clientsSlice'



const Searchbar = () => {



  const client = useSelector((state: RootState) => state.clients.value)

  const dispatch = useDispatch()

  const deleteByIcon = (id: string) => {
    dispatch(deleteclient(id))
    window.location.reload()
  }

  const [searchBar, setSearchBar] = useState('')
  const filterClient = client.filter((item) => {
    if (item._id === searchBar) {
      return item
    }
  })


  return (
    <>
      <div className='mb-5 flex flex-col'>
        <input value={searchBar} onChange={(e) => setSearchBar(e.target.value)} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Buscar por ID" required />

        {filterClient.map((item) => (
          <div className='flex justify-center p-10' key={item._id}>
            <h1 className='font-poppins text-center'>{item.name}</h1> <button onClick={() => deleteByIcon(item._id)}><DeleteForeverIcon /></button>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Searchbar