import { Outlet,Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
            <div style={{backgroundColor:"Blue",fontSize:"20px", border:"1px solid black",padding:"10px"}}>
               <Link to={"home"} style={{color:"white",padding:"5px" ,textDecoration:"none"}}> Home |</Link>
               <Link to={"about"}  style={{color:"white",padding:"5px",textDecoration:"none"}}> About |</Link>
               <Link to={"service"}  style={{color:"white",padding:"5px",textDecoration:"none"}}>  Service |</Link>
               <Link to={"placement"}  style={{color:"white",padding:"5px",textDecoration:"none"}}>  Placement | </Link>
               <Link to={"gallery"}  style={{color:"white",padding:"5px",textDecoration:"none"}}>   Gallery |</Link>
               <Link to={"contactus"}  style={{color:"white",padding:"5px",textDecoration:"none"}}>  ContactUs </Link>

               </div>

               <hr style={{border:"2px solid blue"}}/>

               <Outlet/>


               <hr style={{border:"2px solid black"}} />
               

        </>
    )
}
export default Layout;