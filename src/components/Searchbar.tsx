import { useState } from 'react'
import type { RootState } from '../reduxtoolkit/store'
import { useSelector } from 'react-redux'

const Searchbar = () => {

  const client = useSelector((state: RootState) => state.clients.value)
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
          <div key={item._id}>
            <h1 className='font-poppins text-center'>{item.name}</h1>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default Searchbar