import React from 'react'
import { useState } from 'react'
import classes from './index.module.css'
import { collection, setDoc, getDocs, doc, } from "firebase/firestore"; 
import {db,storage} from '../../../firebase/firebase'
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"



const setDate = new Date() 
const year = setDate.getFullYear()
const date = setDate.getDate()
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let month = months[setDate.getMonth()];
function Addpost() {
  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage] =useState(null)
  
  
 const addPost= async(e)=>{
  e.preventDefault()

  if(name.length < 4){
    alert('Name cannot be less than 3 character')
    return;
  }
  if(description.length<10){
    alert('Description cannot be less than 3 character')
    return
  }
  if(!image){
    alert('please upload photo')
    return
  }
// if(image){
// }
     
  // try {
  //   const docRef = await setDoc(collection(db, "post"), {
  //     name:name,
  //     description:description,
  //     date: new Date(),
  //     url:imgUrl
      

  //   });
    
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

const uploadImg =ref(storage,`images/${image.name }`)
  uploadBytes(uploadImg,image).then((hi)=>{
    console.log(hi)
    getDownloadURL(uploadImg).then(function(url){
      
        const postRef = collection(db,"posts")

    setDoc(doc(postRef),{
      name:name,
      description:description,
      date:`${date} ${month} ${year}` ,
      url:url
  })
  alert('upload sucessfully')


        
      }
      )
    
  })

  
 setName('')
 setDescription('') 
 }   
  return (
    <div className={classes.addpost}>
            <h2 className={classes.h2}>Add Post</h2>
            <form onSubmit={addPost} className={classes.form}>
             title: <input value={name} type={'text'} onChange={e=>{setName(e.target.value)}}  required/>
              <div> 
             <p>photo:</p><input type={'file'} name={'uploadImg'} onChange={e=>{setImage(e.target.files[0])}}/></div>

             <div className={classes.des}><p>description:</p> <textarea 
             value={description} onChange={e=>{setDescription(e.target.value)}} required/></div>
           
            
             <button >post</button>
            </form>
        
    </div>
  )
}

export default Addpost