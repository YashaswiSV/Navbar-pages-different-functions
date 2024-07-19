import Table from 'react-bootstrap/Table';
import axios from 'axios';

import { useState,useEffect } from "react";
const Service=()=>{

const [mydata , setMydata]=useState([]);

const loadData=()=>{
    let url='http://localhost:3000/employee';
    axios.get(url).then((res)=>{
        setMydata(res.data)
        console.log(res.data);
    });
}
useEffect(()=>{
    loadData();
},[]);

const ans=mydata.map((key)=>{
    return(
        <>
          <tr>
               <td>{key.empid}</td>
               <td>{key.ename}</td>
               <td>{key.design}</td>
               <td>{key.depart}</td>
               <td>{key.bsalary}</td>

          </tr>
        </>
    )
})


    return(
        <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee id</th>
          <th>Employee name</th>
          <th>Designation</th>
          <th>Employe designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
          
        
        </>
    )

}
export default Service;

