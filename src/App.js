import React, { useState } from 'react'
import ToDoList from './ToDoList'

function App() {
  const [myState, setState] = useState("")
  const [myData, setData] = useState([])

  function handleChange(event)
  {
    setState(event.target.value)
  }

  function handleClick()
  {
    setState("")
    setData((prevData) => [...prevData, myState])
  }

  function deleteItems(id)
  {
    setData((prevData) =>{
      return prevData.filter((arrElm, index)=>{
        return id!=index
      })
    })
  }

  function handleSubmit(event)
  {
    event.preventDefault()
  }
  return (
    <div>
        <div className="container">
          <h2>To Do Lists</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" value={myState} onChange={handleChange} placeholder="Write here..."></input>
              <button onClick={handleClick}>Add</button>
          </form>
          {
            myData.map((item, index) =>{
              return (<ToDoList 
                        id ={index}
                        text = {item}
                        onSelect = {deleteItems}
                         />)
            })
          }
        </div>
    </div>
  )
}

export default App