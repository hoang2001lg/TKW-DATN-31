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
import ListCoach from './page/admin/Coach/ListCoach'
import AddCoach from './page/admin/Coach/AddCoach'
import EditCoach from './page/admin/Coach/EditCoach'
import { CoachType } from './Type/CoachType'
import { addCoach, listCoach, removeCoach, updateCoach } from './API/Coach'
import {Receptionists} from '../src/Type/receptionists'
import {addReceptionist, listReceptionist, removeReceptionist, updateReceptionist} from '../src/API/receptionists'
import { addSubject, listSubject, removeSubject, updateSubject } from './API/subject'
import ListReceptionist from './page/admin/listReceptionists/ListReceptionist'
import AddReceptionist from './page/admin/listReceptionists/AddReceptionist'
import EditReceptionist from './page/admin/listReceptionists/EditReceptionist'
import { TypeSubject } from './Type/TypeSubject'
import ListSubject from './page/admin/subject/ListSubject'
import Addsubject from './page/admin/subject/AddSubject'
import Editsubject from './page/admin/subject/EditSubject'

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])
  const [Coachs, setCoachs] = useState<CoachType[]>([])
  const [subjects, setSubjects] = useState<TypeSubject[]>([]);
  const [contacts, setContacts] = useState<ContactType[]>([])
  const [receptionists,setReceptionists] = useState<Receptionists[]>([])
  useEffect(() => {
    const getCoachs = async () => {
      const { data } = await listCoach();
      setCoachs(data);
    }
    getCoachs();
  }, []);

  const onHandleAddCoach = async (coach: any) => {
    const { data } = await addCoach(coach);
    setCoachs([...Coachs, data]);
  }
  const onHandleRemoveCoach = async (id: number) => {
    removeCoach(id);
    setCoachs(Coachs.filter(item => item.id !== id));
  }
  const onHandleUpdateCoach = async (coachs: CoachType) => {
    try {
      const { data } = await updateCoach(coachs);
      setCoachs(Coachs.map(item => item.id === data.id ? coachs : item))
    } catch (error) {

    }
  }
//  Packages
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
// Receptionists
useEffect(()=>{
  const getReceptionists = async ()=>{
    const {data} = await listReceptionist();
    setReceptionists(data);
  }
  getReceptionists();
},[])
//delete receptionists
const onHandleremoveReceptionist = async (id: number) => {
  removeReceptionist(id)
  setReceptionists(receptionists.filter(item => item.id !== id));
}
//add receptionists
const onhandlerAddReceptionist = async(receptionist:Receptionists)=>{
  const {data} = await addReceptionist(receptionist)
  setReceptionists([...receptionists,data])
}
// update receptions
const onHandlerUpdateReceptionist = async (receptionist:Receptionists)=>{
  try {
    const { data } = await updateReceptionist(receptionist);
    setReceptionists(receptionists.map(item => item.id === data.id ? data : item))
    if (data) {
      alert("Update successful!");
    }
  } catch (error) {
  }
}
//Subject start

useEffect(() => {
  const getSubject = async () => {
    const { data } = await listSubject();
    setSubjects(data);
  };
  getSubject();
}, [])
const onHandleRemoveSubject = (id: number) => {
  if (window.confirm('Are you sure you want to remove  ?')) {
    removeSubject(id);
    setSubjects(subjects.filter(item => item.id !== id));
  }
}
const onHandleAddSubject = async (subject: TypeSubject) => {
  const { data } = await addSubject(subject);
  setSubjects([...subjects, data]);
  alert("Success!");
}
const onHandleUpdateSubject = async (subject: TypeSubject) => {
  const { data } = await updateSubject(subject);
  setSubjects(subjects.map(item => item.id == data.id ? data : item));
}
//Subject End



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
              <Route path='coach' element={< ListCoach coachs={Coachs} onRemoveCoach={onHandleRemoveCoach} />} />
              <Route path='coach/add' element={< AddCoach  onAddCoach={onHandleAddCoach} />} />
              <Route path='coach/:id/edit' element={< EditCoach onUpdateCoach={onHandleUpdateCoach} />} />
            </Route>
            <Route path='packagess'>
            <Route index element={<ListPackages packagess={packagess} onRemovePack={onHandleremovePack} />} />
            <Route path='add' element={<AddPackages onAddPack={onhandlerAddPack} />} />
            <Route path=':id/edit' element={<EditPackages onUpdatePack={onHandlerUpdatePack} />} />
          </Route>
          <Route path="receptionist">
          <Route index element={<ListReceptionist receptionist={receptionists} onRemove={onHandleremoveReceptionist} />} /> 
          <Route path='add' element={<AddReceptionist onAdd={onhandlerAddReceptionist}/>}/> 
          <Route path=':id/edit' element={<EditReceptionist onUpdate={onHandlerUpdateReceptionist}/>}/> 
          </Route>
          <Route path='subject'>
            <Route index element={<ListSubject subjects={subjects} onRemove={onHandleRemoveSubject} />} />
            <Route path='add' element={<Addsubject onAddSubject={onHandleAddSubject} />} />
            <Route path=':id/edit' element={<Editsubject onUpdateSubject={onHandleUpdateSubject} />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
