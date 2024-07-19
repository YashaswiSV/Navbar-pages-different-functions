import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const About=()=>{

    const [input,setmyinput]=useState({});

    const handledata=(e)=>{
        let name=(e.target.name)
        let value=(e.target.value)

        setmyinput((values)=>({...values,[name]:value}))
       
    }
    const handlesubmit=()=>{
        let url="http://localhost:3000/employee";
        axios.post(url,input).then(()=>{
            alert("Successfully submit")
            setmyinput("");
        })
    }

     


    return(
        <>
               <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Id</Form.Label>
        <Form.Control type="text" name="empid" placeholder="Enter Id" value={input.empid}  onChange={handledata}/>
     
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name="ename" placeholder="Enter Name" value={input.ename}  onChange={handledata} />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" name="desig" placeholder="Enter Designation"  value={input.design} onChange={handledata}/>
      </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" name="depart" placeholder="Enter department" value={input.depart}  onChange={handledata}/>
     
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" name="bsalary" placeholder="Enter Salary" value={input.bsalary}  onChange={handledata} />
     
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
           
             
        </>
    )
}
export default  About;