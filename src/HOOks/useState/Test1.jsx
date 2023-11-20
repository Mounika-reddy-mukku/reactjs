import React,{useState} from 'react'
let Test1=()=>{
    let [msg,setMsg]=useState("Hi")
    return<>
        <p3>Message={msg}</p3><br />
        <button onClick={()=>{setMsg("Hello sir Good Morning ")}}>Update</button>
    </>
}
export default Test1