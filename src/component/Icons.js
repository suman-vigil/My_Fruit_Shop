import React from 'react'


const Icons = (props) => {
  return (
    <>
      <div className='icons' style={{
        height: "8rem",
    width: "10rem"
    }}>
        <div style={{textAlign:"center"}}> 
        <img style={{height:"4rem"}} src={props.img}/>
        <h6>{props.fruitName}</h6>
        <p>{props.collection}</p>
        </div>
      </div>
    </>
  )
}

export default Icons
