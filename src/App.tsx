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
import ListCoach from './page/admin/Coach/ListCoach'
import AddCoach from './page/admin/Coach/AddCoach'
import EditCoach from './page/admin/Coach/EditCoach'
import { CoachType } from './Type/CoachType'
import { addCoach, listCoach, removeCoach, updateCoach } from './API/Coach'
import NewsList from './page/admin/NewsList/NewsList'
import { PostsType } from './Type/PostsType'
import { addPosts, Postslist, removePosts, updatePosts } from './API/Newlist'
import AddNews from './page/admin/NewsList/AddNews'
import EditNews from './page/admin/NewsList/EditNews'
import { addcontact, listcontact, removecontact, updatecontact } from './API/contact'
import { ContactType } from './Type/Contact'
import { addsche, listsche, removesche, updatesche } from './API/schedule'
import { ScheduleType } from './Type/ScheduleType'
import ListSchedule from './page/admin/Schedule/ListSchedule'
import AddSchedule from './page/admin/Schedule/AddSchedule'
import EditSchedule from './page/admin/Schedule/EditSchedule'
import ListContact from './page/admin/Contact/listContact'
import EditContact from './page/admin/Contact/editContact'
import Signup from './page/Signup'
import Signin from './page/Signin'

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])
  const [Coachs, setCoachs] = useState<CoachType[]>([])
  const [Posts, setPosts] = useState<PostsType[]>([])
  const [contacts, setContacts] = useState<ContactType[]>([])
  const [schedules, setSchedules] = useState<ScheduleType[]>([])
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await Postslist();
      setPosts(data);
    }
    getPosts();
  }, []);

  const onHandleAddPosts = async (Posts: any) => {
    const { data } = await addPosts(Posts);
    setPosts([...Posts, data]);
  }
  const onHandleRemovePosts = async (id: number) => {
    removePosts(id);
    setPosts(Posts.filter(item => item.id !== id));
  }
  const onHandleUpdatePosts = async (posts: PostsType) => {
    try {
      const { data } = await updatePosts(posts);
      setPosts(Posts.map(item => item.id === data.id ? posts: item))
    } catch (error) {

    }
  }
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
// Schedule
  useEffect(() => {
    const getSchedules = async () => {
      const { data } = await listsche();
      setSchedules(data);
    }
    getSchedules();
  }, [])
  //delete schedule
  const onHandleremoveSche = async (id: number) => {
    if (window.confirm('Are you sure you want to remove  ?')) {
    removesche(id)
    setSchedules(schedules.filter(item => item.id !== id));
    }
  }
  //add schedule
  const onhandlerAddSche = async (schedule: ScheduleType) => {
    const { data } = await addsche(schedule)
    setSchedules([...schedules, data])
    alert("More success!");
  }
  // update schedule
  const onHandlerUpdateSche = async (schedule: ScheduleType) => {
    try {
      const { data } = await updatesche(schedule);
      setSchedules(schedules.map(item => item.id === data.id ? data : item))
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
//delete contact
const onHandleremoveContact = async (id: number) => {
  if (window.confirm('Are you sure you want to remove  ?')) {
  removecontact(id)
  setContacts(contacts.filter(item => item.id !== id));
  }
}
// add contact
const onhandlerAddContact = async (contact: ContactType) => {
  const { data } = await addcontact(contact)
  setContacts([...contacts, data])
  alert("More success!");
}
 // update contact
 const onHandlerUpdateContact = async (contact: ContactType) => {
  try {
    const { data } = await updatecontact(contact);
    setContacts(contacts.map(item => item.id === data.id ? data : item))
    if (data) {
      alert("Update successful!");
    }
  } catch (error) {
  }
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
              <Route path='signup' element={<Signup/>} />
              <Route path='signin' element={<Signin/>} />
              <Route path='contact' element={< Contact onAddContact={onhandlerAddContact}/>} />
            </Route>
            {/* admin */}
            <Route path="admin" element={< AdminLayout />} >
              <Route path='coach' element={< ListCoach coachs={Coachs} onRemoveCoach={onHandleRemoveCoach} />} />
              <Route path='coach/add' element={< AddCoach  onAddCoach={onHandleAddCoach} subjects={[]}  />} />
              <Route path='coach/:id/edit' element={< EditCoach onUpdateCoach={onHandleUpdateCoach} subjects={[]} />} />
              <Route path='Posts' element = {< NewsList PostsList = {Posts}  onRemovePosts ={onHandleRemovePosts} />} />
              <Route path='Posts/add' element={< AddNews  onAddPosts={onHandleAddPosts} subjects={[]}  />} />
              <Route path='Posts/:id/edit' element={< EditNews onUpdatePost={onHandleUpdatePosts} subjects={[]} />} />
              <Route path='packagess' element={<ListPackages packagess={packagess} onRemovePack={onHandleremovePack} />} />
              <Route path='packagess/add' element={<AddPackages onAddPack={onhandlerAddPack} />} />
              <Route path='packagess/:id/edit' element={<EditPackages onUpdatePack={onHandlerUpdatePack} />} />
              <Route path='schedules' element={<ListSchedule schedules={schedules} onRemoveSche={onHandleremoveSche} />} />
              <Route path='schedules/add' element={<AddSchedule onAddSche={onhandlerAddSche} />} />
              <Route path='schedules/:id/edit' element={<EditSchedule onUpdateSche={onHandlerUpdateSche} />} />
              <Route path='contacts' element={<ListContact contacts={contacts} onRemoveContact={onHandleremoveContact} />} />
              <Route path='contacts/:id/edit' element={<EditContact onUpdateContact={onHandlerUpdateContact} />} />
            </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
