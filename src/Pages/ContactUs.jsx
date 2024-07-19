

import { useState,useEffect } from "react"
const ContactUs=()=>{
    const[cnt,setCnt]=useState(0)
    const[add,setAdd]=useState(2)
   
   useEffect(()=>{
     setAdd(cnt+10)
   },[cnt])
   
   
    return(
     <>
    <h1> this is the effect method {cnt}</h1>
    <h1> this is the multiplication {add}</h1>
    <button onClick={()=>{setCnt(cnt+1)}}>CLICK HERE</button>
     </>
    )
   }
   
   export default ContactUs;