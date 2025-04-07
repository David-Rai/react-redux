import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './store/counterSlice'

const App = () => {
const count=useSelector((state)=> state.counter.value)
const dispatch=useDispatch()

  return (
 <main className='h-screen w-full flex items-center justify-center flex-col'>
    <div>{count}</div>
   <div className="btns">
   <button onClick={()=> dispatch(increment())} className='btn bg-green-400'>increase</button>
    <button onClick={()=> dispatch(decrement())} className='btn bg-red-600'>decrement</button>
    <button onClick={()=> dispatch(reset())} className='btn bg-blue-600'>reset</button>
   </div>
 </main>
  )
}

export default App