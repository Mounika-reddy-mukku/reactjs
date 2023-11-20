import React from 'react'
import { gmAction,gnAction } from './REDUX/message/message.action'
import {useDispatch,useSelector} from 'react-redux'

let Message=()=>{
    let dispatch = useDispatch()
    let message = useSelector((state)=>{
    return state
    })
    
    let gmHandler=()=>{
        //dispatch redux action
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
    return <>
        <h3>Value:{message.msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </>
}
export default Message