import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './page/AboutPage'
import Ourteam from './page/OurTeam'
import HomePage from './page/HomePage'
import Contact from './page/Contact'
import AdminLayout from './page/layout/AdminLayout'
import WebsiteLayout from './page/layout/WebsiteLayout'
import { PackagesType } from './Type/Packages'
import { addpack, listpack, removepack, updatepack } from './API/packages'
import ListPackages from './page/admin/listPackages/ListPackages'
import AddPackages from './page/admin/listPackages/AddPackages'
import EditPackages from './page/admin/listPackages/EditPackages'
import { ContactType } from './Type/Contact'
import { addcontact, listcontact } from './API/contact'

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])
  const [contacts, setContacts] = useState<ContactType[]>([])
// Packages
  useEffect(() => {
    const getPackagess = async () => {
      const { data } = await listpack();
      setPackagess(data);
    }
    getPackagess();
  }, [])
  //delete packages
  const onHandleremovePack = async (id: number) => {
    if (window.confirm('Are you sure you want to remove  ?')) {
    removepack(id)
    setPackagess(packagess.filter(item => item.id !== id));
    }
  }
  //add packages
  const onhandlerAddPack = async (packages: PackagesType) => {
    const { data } = await addpack(packages)
    setPackagess([...packagess, data])
    alert("More success!");
  }
  // update packages
  const onHandlerUpdatePack = async (packages: PackagesType) => {
    try {
      const { data } = await updatepack(packages);
      setPackagess(packagess.map(item => item.id === data.id ? data : item))
      if (data) {
        alert("Update successful!");
      }
    } catch (error) {
    }
  }
// Contact
useEffect(() => {
  const getContacts = async () => {
    const { data } = await listcontact();
    setContacts(data);
  }
  getContacts();
}, [])
// add contact
const onhandlerAddContact = async (contact: ContactType) => {
  const { data } = await addcontact(contact)
  setPackagess([...contacts, data])
  alert("More success!");
}


  return (
    <>
      <div className='App'>

          <Routes>
            {/* clients */}
            <Route path='/' element={< WebsiteLayout />} >
               <Route index element={<HomePage />} />
              <Route path='about' element={< AboutPage/>} />
              <Route path='ourteam' element={<Ourteam/>} />
              <Route path='contact' element={< Contact onAddContact={onhandlerAddContact}/>} />
            </Route>
            {/* admin */}
            <Route path="admin" element={< AdminLayout />} >
            </Route>
            <Route path='packagess'>
            <Route index element={<ListPackages packagess={packagess} onRemovePack={onHandleremovePack} />} />
            <Route path='add' element={<AddPackages onAddPack={onhandlerAddPack} />} />
            <Route path=':id/edit' element={<EditPackages onUpdatePack={onHandlerUpdatePack} />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
