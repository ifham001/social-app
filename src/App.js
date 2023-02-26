import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import WelcomePage from './pages/WelcomePage'
import {useSelector} from 'react-redux'
import UpdatePassPage from './pages/UpdatePassPage'
import AddPost from './pages/AddPost'




function App() {
  const loginState = useSelector(state=>state.auth.isLoggedIn)
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      { !loginState&& <Route path='/auth' element={<AuthPage/>}/>}
      {loginState&&<Route path='/welcome' element={<WelcomePage/>}/>}
      <Route path='/welcome/updatepassword' element={<UpdatePassPage/>}/>
      <Route path='/welcome/addpost' element={<AddPost/>}/>
      </Routes>
      
      
      
    </>
  )
}

export default App