import React,{useState} from 'react'
let Test=()=>{
    let [msg,setMsg]=useState("Hi")
    let update=()=>{
        setMsg("Hello Nice to meet you")
    }
    return<>
        <p3>Message={msg}</p3><br />
        <button onClick={update}>Update</button>
    </>
}
export default Test