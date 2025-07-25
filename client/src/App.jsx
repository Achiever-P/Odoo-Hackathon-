import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import AskQuestion from './pages/AskQuestion'
import AnswerPage from './pages/AnswerPage'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

const {token} = useAppContext()

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/question/:id" element={<AnswerPage/>} />
        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path='addblog' element={<AddBlog/>} /> 
          <Route path='AskQuestion' element={<AskQuestion />} />
          <Route path='Listblog' element={<ListBlog/>} />
          <Route path='comments' element={<Comments/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
