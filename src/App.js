import {useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

import './App.css';

function App() {

  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) ||[] )
  console.error(JSON.parse(localStorage.getItem("todos")))
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const save =(todos) => {
    // localStorage.setItem("todos", JSON.stringify(todos));  
  }
  const addTodo = (text) =>{
    text=text.trim()
    if(todos.filter(x=> x.text=== text).length>0) return false
    let id = 1;
    if(todos.length > 0 ){
      id = todos[0].id + 1
    }

    const newTodo ={
      text:text,
      id:id,
      key:id,
      complete: false,
    }

    setTodos(() => [newTodo, ...todos])

    return true
  }

  const handleDelete = (id) =>{
      const newTodos =  todos.filter((el) => el.id !== id)

      setTodos(newTodos, ...todos)
    save(todos)

  }

  const handleComplete = (id) =>{
    const updatedTodos =todos.map((el) => {
      if(el.id === id){
        el.complete = !el.complete
      }
      return el
    })

    setTodos(updatedTodos)
    save(todos)

  }

  const elements = todos.map((el) => (
    <TodoItem 
      text={el.text}
      id = {el.id}
      key= {el.key}
      todo={el}
      handleDelete ={handleDelete}
      handleComplete ={handleComplete}
      complete={el.complete}
    />
  ))

  // console.log(todos)

  return (
    <div className="App">
      <div className='form'>
        <h1 className='title'>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        {elements}
      </div>
    </div>
  );
}

export default App;
