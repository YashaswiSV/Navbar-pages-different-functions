import { useState } from "react";


const Gallery=()=>{
    const [count,setcount]=useState(15);

    return(
        <>
             <h1>Count : {count}</h1>
             <button onClick={()=>setcount(count+1)}>Increment</button>
             <button onClick={()=>setcount(count-1)}>Decrement</button>
             <button onClick={()=>setcount(0)}>Reset</button>
        </>
    )
}
export default  Gallery;