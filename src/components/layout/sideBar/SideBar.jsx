import React from 'react'
import classes from './index.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";


function SideBar() {
  return (
    <div className={classes.sidebar}>
        
      <ul>
        
      <p className={classes.h3}> <SettingsIcon/> setting</p>
        <li>
        <Link className={classes.link} to={'./updatepassword'}  >- update password </Link>
        </li>
        <li>
        <Link  className={classes.link} to={'./addpost'}  >- add post</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
