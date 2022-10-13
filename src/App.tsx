import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './page/AboutPage'
import Ourteam from './page/OurTeam'
import HomePage from './page/HomePage'
import Contact from './page/Contact'
import AdminLayout from './page/layout/AdminLayout'
import WebsiteLayout from './page/layout/WebsiteLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>

          <Routes>
            {/* clients */}
            <Route path='/' element={< WebsiteLayout />} >
               <Route index element={<HomePage />} />
              <Route path='about' element={< AboutPage/>} />
              <Route path='ourteam' element={<Ourteam/>} />
              <Route path='contact' element={< Contact/>} />
            </Route>
            {/* admin */}
            <Route path="admin" element={< AdminLayout />} >
        </Routes>
      </div>
    </>
  )
}

export default App
