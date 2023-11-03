import CompB from "./CompB";
function CompA(){
    let a=10;
    let b="Hi"
    return <div>
        <h4>Component A</h4>
        <CompB prop1={a} prop2={b}/>
        

    </div>
}
export default CompA