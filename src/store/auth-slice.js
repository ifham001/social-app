import {createSlice} from '@reduxjs/toolkit'



const Token = localStorage.getItem('token')
const isLoggedin = Token&&true 

   

  
 const authSlice = createSlice({
    name:'auth',
    initialState:{
       
        idToken:null,
        isLoggedIn:isLoggedin,
        

    },
    reducers:{
        signIn(state,action){
           
            
            state.idToken=action.payload.idToken
            
            if(state.idToken){
                state.isLoggedIn=true
            }
            else{
                state.isLoggedIn=false
            }
           
            

        },
        signOut(state,action){
            state.idToken = null;
            localStorage.clear()

        }

        
    }
})
export const authAction = authSlice.actions

export default authSlice;