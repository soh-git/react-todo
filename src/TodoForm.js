import React from 'react'
import {useState} from 'react'

const TodoForm = (props) => {

  const [textTodo, setTextTodo] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(textTodo==='') return
    if(!props.addTodo(textTodo))  return
    setTextTodo("")
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTextTodo(e.target.value)}  value={textTodo}/>
            <button>Add Todo</button>
        </form>

    </div>
  )
}

export default TodoForm