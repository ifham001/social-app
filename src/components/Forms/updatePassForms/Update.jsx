import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './index.module.css'


function Update() {
    const idtoken = useSelector(state=>state.auth.idToken)
    
    const [changePass,setChangePass] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const changePasswordHandler=e=>{
        setChangePass(e.target.value)
    }
    const updatePasswordHandler=e=>{
        e.preventDefault();
        console.log(idtoken)
        if(changePass.trim().length<7){
            alert('update password character cannot less then 7 character')
            return;
        }
        if(!changePass===confirmPassword){
            alert('password does not match')
            return
        }
        const updatepassword = async()=>{
           const update = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA-oGh1l4xuLNbi_UMhDMUNMo_Dm72zmv0',
           {
               method:'POST',
               body:JSON.stringify({
                   idToken:idtoken,
                   password:changePass,
                   returnSecureToken:true
               }),
               headers:{
                   
                   'Content-Type': 'application/json'
               }

           })
           if(update.ok){
            alert('Password Change Sucessfully')
           }
           else{
            alert('failed')
           }
        }
           try {
            updatepassword()
           } catch (error) {
            throw new Error(error)
           }

                
       
    }
    const confirmPasswordHandler=e=>{
            setConfirmPassword(e.target.value)
    }
  return (
    <div className={classes.formDiv}>
        
        <form  className={classes.form} onSubmit={updatePasswordHandler}>
        <h2> Change Profile Password </h2>
                    Password:<input type={'password'} value={confirmPassword} onChange={confirmPasswordHandler}/>
                    confirm Password:<input type={'password'} value={changePass} onChange={changePasswordHandler}/>
                    <button>Update Password</button>
                </form>
    
    
    </div>
  )
}

export default Update