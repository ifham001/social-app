import React from 'react'
import Card from './../../../ui/Card'
import classes from './single.module.css'


function Singlepost({title,date,img,description}) {
return (
    <div className={classes.Card}>
      <Card 
          title={title}
          date={date}
          img={img}
          description={description}/>
      
    </div>
  )
}

export default Singlepost
