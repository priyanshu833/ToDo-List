import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])

  const handleAdd=()=>{
    settodos([...todos, { todo,isCompleted: false }])
    settodo('')
  }
  const handleEdit=()=>{
    
  }
  const handleDelete=()=>{
    
  }

  return (
    <>
    <Navbar/>
    <div className="container bg-sky-100 mx-auto my-3 p-3 rounded-xl min-h-[80vh]">
      <div className="addtodo">
        <h2 className='font-bold'>Add a ToDo</h2>
        <input type="text" />
        <button onClick={handleAdd} className='bg-purple-500 hover:bg-purple-800 text-white rounded-md px-2 mx-3'>Add</button>
      </div>
      <h2 className='font-bold'>Your ToDo's</h2>
      <div className="yourtodo flex gap-4">
      <div className="text">{todo}</div>
      <div className="buttons ">
        <button onclick={handleEdit} className='bg-purple-500 hover:bg-purple-800 text-white rounded-md px-2 mx-1'>Edit</button>
        <button onclick={handleDelete} className='bg-purple-500 hover:bg-purple-800 text-white rounded-md px-2 mx-1'>Delete</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
