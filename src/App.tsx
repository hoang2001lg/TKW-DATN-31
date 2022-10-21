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

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])
  const [Coachs, setCoachs] = useState<CoachType[]>([])
  const [Posts, setPosts] = useState<PostsType[]>([])
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
  useEffect(() => {
    const getPackagess = async () => {
      const { data } = await listpack();
      setPackagess(data);
    }
    getPackagess();
  }, [])
  //delete product
  const onHandleremovePack = async (id: number) => {
    if (window.confirm('Are you sure you want to remove  ?')) {
    removepack(id)
    setPackagess(packagess.filter(item => item.id !== id));
    }
  }
  //add product
  const onhandlerAddPack = async (packages: PackagesType) => {
    const { data } = await addpack(packages)
    setPackagess([...packagess, data])
    alert("More success!");
  }
  // update product
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
              <Route path='coach' element={< ListCoach coachs={Coachs} onRemoveCoach={onHandleRemoveCoach} />} />
              <Route path='coach/add' element={< AddCoach  onAddCoach={onHandleAddCoach} subjects={[]}  />} />
              <Route path='coach/:id/edit' element={< EditCoach onUpdateCoach={onHandleUpdateCoach} subjects={[]} />} />
              <Route path='Posts' element = {< NewsList PostsList = {Posts}  onRemovePosts ={onHandleRemovePosts} />} />
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
