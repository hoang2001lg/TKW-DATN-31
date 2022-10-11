import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './page/AboutPage'
import Homepage from './page/Homepage'
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
              <Route index element={< Homepage/>} />
              <Route path='about' element={< AboutPage/>} />
            </Route>
            {/* admin */}
            <Route path="admin" element={< AdminLayout />} >

            </Route>
          </Routes>
        </div>
    </>
  )
}

export default App
