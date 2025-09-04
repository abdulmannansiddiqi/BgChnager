
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('grey')
  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-4xl px-3 py-2'>
          <button
          onClick={()=>setcolor('red')}
          className='outline-none px-4 py-1 rounded-4xl text-white '
          style={{backgroundColor:'red'}} 
          >red</button>
          <button
          onClick={()=>setcolor('green')}
          className='outline-none px-4 py-1 rounded-4xl text-white '
          style={{backgroundColor:'green'}} 
          >Green</button>
          <button
          onClick={()=>setcolor('blue')}
          className='outline-none px-4 py-1 rounded-4xl text-white '
          style={{backgroundColor:'blue'}} 
          >Blue</button>
          <button
          onClick={()=>setcolor('black')}
          className='outline-none px-4 py-1 rounded-4xl text-white '
          style={{backgroundColor:'black'}} 
          >Black</button>
          <button
          onClick={()=>setcolor('orange')}
          className='outline-none px-4 py-1 rounded-4xl text-white '
          style={{backgroundColor:'orange'}} 
          >orange</button>
        </div>
      </div>
    </div>

  )
}

export default 
