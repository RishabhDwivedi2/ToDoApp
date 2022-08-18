import React from 'react'

function ToDoList(props) {
  return (
    <div className="my-todo">
      <img src='./images/button.png' onClick={()=>{
        props.onSelect(props.id)
      }}></img>
      <p>{props.text}</p>
    </div>
  )
}

export default ToDoList