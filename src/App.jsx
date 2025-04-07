import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./store/todoSlice";

const App = () => {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const inputRef=React.useRef(null)
      //adding new todo to the todoSlice reducer
  const handleAdd=()=>{
    console.log("clicker")
    console.log(inputRef.current.value)
dispatch(add(inputRef.current.value))
}

  return (
    <>
      <main className="h-screen flex-col  bg-blue-100 w-full flex items-center justify-center">
        <section>
        <input
        ref={inputRef}
          type="text"
          placeholder="enter your todo"
          className="border-[1px] border-red-700 pl-3"
        />
        <button onClick={()=> handleAdd()} className="btn bg-blue-400">add</button>
        </section>      
      <ul className="list-disc">
        {
          data && data.map((d,index)=>{
            return <li key={index}>{d}</li>
          })
        }
      </ul>
      </main>
    </>
  );
};

export default App;
