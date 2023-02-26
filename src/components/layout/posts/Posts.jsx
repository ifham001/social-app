import cake from '../../../cake-piece.jpg'
import fox from '../../../babyfox.jpg'
import bird from '../../../bird.jpg'
import Singlepost from './Singlepost'
import classes from './post.module.css'
 import {db,storage, } from '../../../firebase/firebase'
// import { getStorage, ref, getDownloadURL,listAll, } from "firebase/storage";
import {collection,doc,getDocs,query  } from 'firebase/firestore'
import { useEffect, useState } from 'react'




function Posts() {
  const [arry,setArry]=useState([])

 
  // const posts = await getDoc(collection(db,"post"));
  // posts.forEach(element => {
  //   setArry(element)
  // });

  // db.collection("post").get().then(res=>{
  //   res.docs.forEach(element => {
  //     const data = element.data();
  //     setArry(arr=>[...arr,data])
  //   });
  // })
 
 useEffect(()=>{
  const fetchUp =async()=>{

    const q = query(collection(db, "posts")) 
        
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      
      console.log(doc.data());
      const data = doc.data()
      setArry(initial=>
      [...initial,data]
      )
  
    });}
    fetchUp()
    
  

 },[])
 

  

 
  return (
    <div className={classes.posts}>
        
     <div className={classes.postss}>
     <Singlepost 
            title={'Sam '}
            img={cake}
            description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'}
            date={'25 january 2023'}/>
             <Singlepost 
            title={'Steve'}
            img={fox}
            description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'}
            date={'25 january 2023'}/>
             <Singlepost 
            title={'Robins'}
            img={bird}
            description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'}
            date={'25 january 2023'}/>

            {arry.map(data=>{
              return <>
              <Singlepost 
              key={data.id}
              title={data.name}
              img={data.url}
              description={data.description}
              date={data.date}/>
              
              <img src={data.img}/></>
              
              
            })}

            
     </div>
    
            {/* <button onClick={getPosts}> postss  </button> */}
    </div> 
  )
}

export default Posts
