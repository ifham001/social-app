import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import Posts from '../components/layout/posts/Posts'
import SideBar from '../components/layout/sideBar/SideBar'
import { authAction } from '../store/auth-slice'







function WelcomePage() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  // const SignOutHandler =e=>{
  //      dispatch(authAction.signOut())
  //      navigate('/')
  // }
  return (
  <> 
      <Header/>
      
      <div style={{display:`flex`,marginTop:`150px`}}>
      <SideBar/>
        <Posts/>
        
      </div>
    

    </> 
  )
}

export default WelcomePage