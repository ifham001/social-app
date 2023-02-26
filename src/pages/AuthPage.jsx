import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForms from '../components/Forms/AuthForms'
import {useDispatch} from 'react-redux'
import { authAction } from '../store/auth-slice'
import Header from '../components/Header/Header'




function AuthPage() {
    const dispatch =useDispatch()
    const navigate = useNavigate()
    
    const Authh = async(cred)=>{
        
        const fetchAuthApi = await fetch(cred.url,
        {
            method:'POST',
            body:JSON.stringify({
                email:cred.email,
                password:cred.password,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }
            )
            const respo = await fetchAuthApi.json()
            console.log(respo.idToken)
            if(!fetchAuthApi.ok){
                
                alert(`error -- ${respo.error.message}`)
            }
            else{
                alert(cred.status)
                
               if(cred.login){
                localStorage.setItem('token',respo.idToken)
                
                dispatch(authAction.signIn({
                    idToken:respo.idToken
                }))
                navigate('/welcome')
                
               }
            }
    }
    const SignInHandler =cred=>{
        if(Authh(cred)){
           
        }
        
    }
    const SignUpHandler=cred=>{
        Authh(cred)
        
    }
  return (
    <> <Header/>
        <AuthForms 
            SignIn={SignInHandler}
            SignUp={SignUpHandler}/>
    </>
  )
}

export default AuthPage