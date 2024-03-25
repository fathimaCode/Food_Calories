import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Menu from './pages/Menu'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
    </>
  )
}

export default App
