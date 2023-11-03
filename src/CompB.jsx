
function CompB(prop){
    let sal=50000;
    return <div>
        <p>props example CompB</p>
        <pre>{JSON.stringify(prop)}</pre>
        <p>id={prop.p1}</p>
        <p>name={prop.p2}</p>
        <p>sal={sal}</p>
        <p>Array={prop.p3}</p>
        <p>A0={prop.p3[0]}</p>
        <p>object={prop.p4}</p>
        

    </div>

}
export default CompB