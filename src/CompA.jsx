import React from 'react';
import CompB from './CompB';
class CompA extends React.Component{
    id=101;
    name="Mounika"
    array=[1,2,3,4]
    obj=["Hello"]
    render(){
        return <div>
            <p>Props example CompA</p>
            <CompB p1={this.id} p2={this.name} p3={this.array} p4={this.obj}/>
            
        </div>
    }

}
export default CompA