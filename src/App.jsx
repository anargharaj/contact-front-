import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Routes,Route,Navigate } from 'react-router-dom'
import EditContact from './components/EditContact'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ViewContact from './components/ViewContact'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/contactlist'}/>}/>
      <Route path='/contactlist' element={<ContactList/>}/>

      <Route path='/addcontact' element={<AddContact/>}/>
      <Route path='/viewcontact/:id' element={<ViewContact/>}/>
      <Route path='/editcontact/:id' element={<EditContact/>}/>
   </Routes>
   <ToastContainer/>
    </>
  )
}

export default App
