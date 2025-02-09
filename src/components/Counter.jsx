import React, { useState } from 'react'

function counter() {
    const [count,setCount]= useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(old=>old+1)}>Increment</button>
        <button onClick={()=>setCount(old=>old-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset Counter</button>
    </div>
  )
}

export default counter