import React, { useContext } from 'react'
import Login from "./Page/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Admin/Dashboard';
import AllApointments from './Page/Admin/AllApointments';
import AddDoctor from './Page/Admin/AddDoctor';
import DoctorsList from './Page/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './Page/Doctor/DoctorDashboard';
import DoctorAppointment from './Page/Doctor/DoctorAppointment';
import DoctorProfile from './Page/Doctor/DoctorProfile';
const App = () => {
  const {aToken} = useContext(AdminContext)
  const {dToken}= useContext(DoctorContext)
  return  aToken || dToken? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Admin Route */}
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllApointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>
          {/* Doctor Route */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>

        </Routes>
      </div>
    </div>
  ):(
    <><Login/>
      <ToastContainer/>
    </>
  )
}

export default App
