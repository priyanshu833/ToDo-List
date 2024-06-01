import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])

  const handleAdd=()=>{
    settodos([...todos, {id:uuidv4(), todo, isCompleted: false }])
    settodo('')
    console.log(todos)
  }
  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    settodo(t[0].todo)
    let newtodos = todos.filter(item=>{
      return item.id!==id
    }); 
    settodos(newtodos) 
  }

  const handleDelete=(e,id)=>{
    let index= todos.findIndex(item=>{
      return item.id===id;
    })
    let newtodos=todos.filter(item=>{
      return item.id!==id
    });
    settodos(newtodos)
  }

  const handleChange=(e)=>{
    settodo(e.target.value)
  }

  const handleCheckbox=(e)=>{
    let id= e.target.name
    let index= todos.findIndex(item=>{
      return item.id===id;
    })
    let newtodos=[...todos]
    newtodos[index].isCompleted= !newtodos[index].isCompleted
    settodos(newtodos)
  }

  return (
    <>
    <Navbar/>
    <div className="container bg-sky-100 mx-auto my-3 p-3 rounded-xl min-h-[80vh]">
      <div className="addtodo">
        <h2 className='font-bold'>Add a ToDo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
        <button onClick={handleAdd} className='bg-purple-500 hover:bg-purple-800 text-white rounded-md px-2 mx-3'>Add</button>
      </div>
      <h2 className='font-bold my-3'>Your ToDo's</h2>

      <div className="yourtodo">
        {todos.length==0 && <div className='font-bold text-center'>Nothing to display</div>}
      {todos.map(item=>{

        return<div key={item.id} className="todo flex w-1/4 justify-between my-2">
          <div className='flex gap-2'>
          <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted}name={item.id}  />
      <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
      </div>
      <div className="buttons ">
        <button onClick={(e)=>handleEdit(e, item.id)} className='bg-purple-500 hover:bg-purple-800 text-white rounded-md px-2 mx-1'>Edit</button>
        <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-purple-500 hover:bg-purple-800 text-white rounded-md px-2 mx-1'>Delete</button>
      </div>
      </div>
      })}

    </div>
    </div>
    </>
  )
}

export default App
