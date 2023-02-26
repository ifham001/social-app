import React from 'react'
import classes from './index.module.css'
import {Link} from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import { authAction } from '../../store/auth-slice'
import {useNavigate} from 'react-router-dom'



function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginState = useSelector(state=>state.auth.isLoggedIn)


    const logOutHandler= ()=>{
        dispatch(authAction.signOut())
       navigate('/')
       console.log(!loginState)
    }
  return (
    <div className={classes.header}>

        <h2>Social App</h2>
       
      
     {!loginState? <button className={classes.btn}>  <Link className={classes.lnk} to={'/auth'}>login</Link></button>:
     <button onClick={logOutHandler} className={classes.btn}>logOut</button>}
        
    </div>
  )
}

export default Header