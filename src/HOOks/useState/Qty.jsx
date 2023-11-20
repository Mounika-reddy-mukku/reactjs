import {useState} from "react"
let Qty=()=>{
    let [qty,setQty]=useState(1)
    return<>
        <i>Quantity:{qty}</i>
        <button onClick={()=>{setQty(qty+1)}}>inc</button>
        <button onClick={()=>{setQty(qty-1)}}>dec</button>
    </>

}
export default Qty