import React from 'react'
import Login from "./components/Login"
import { Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'
import Product from './components/Product'
const App = () => {
  return (
  
    <div>
      <Routes>
          
          <Route path='/' element={<Product/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          
      </Routes >
    </div>
  )
}

export default App