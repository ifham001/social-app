import React, { useState } from 'react'
import classes from './auth.module.css'

function AuthForms({SignIn,SignUp}) {
    const [name,setName]=useState('')
    const [signIn,setSignIn]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   

    const emailHandler=e=>{
        setEmail(e.target.value)
    }
    const passwordHandler=e=>{
        setPassword(e.target.value)
    }
    const AuthHandler =e=>{
        e.preventDefault()
        if(!email.length>7 && !email.includes('@')){
            alert('invalid email')
            return
        }
        if(password.trim().length<7){
            alert('invalid password < 7 character')
            return
        }
        if(!signIn){
            SignIn(
                {
                    email:email,
                    password:password,
                    status:'successfully sign in',
                    url:'https://identitytoolkit.googleapis.com/v1/accounts:xxxxxxxx',
                    login:true
                }
            )
        }
        else{
           
            SignUp(
                {   
                    name:name,
                    email:email,
                    password:password,
                    status:'account created sucessfully',
                    url:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=xxxxxx',
                    login:false
                }
            )
        }

        setEmail('')
        setPassword('')
        setName('')

    }
   const changeState=e=>{
        setSignIn(prevState=>!prevState)
    }
  return (
    <div> 
        <form className={classes.form} onSubmit={AuthHandler}>
        {!signIn ?<h2>SignIn</h2>:<h2>SignUp</h2>}
           {/* {signIn&& <input type={'text'} onChange={nameHandler} value={name} />} */}
           Email: <input type={'email'} onChange={emailHandler} value={email}/>
           password: <input type={'password'} onChange={passwordHandler} value={password}/>
            {signIn?<button>SignUp</button>:<button>SignIn</button>}
            {signIn?<h4 onClick={changeState}>Already Have An account?</h4>
            :<h4 onClick={changeState}>Create an Account</h4>}
        </form>
        
    </div>
  )
}

export default AuthForms