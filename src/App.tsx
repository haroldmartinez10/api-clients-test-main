
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clients from './components/Clients'
import { store } from './reduxtoolkit/store'
import { Provider } from 'react-redux'


const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='clients' element={<Clients />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
export default App