import React from 'react';
class CompB extends React.Component{
    render(){
        return <div>
            <pre>{JSON.stringify(this.props)}</pre>
            <p>{this.props.prop1}<br></br>{this.props.prop2}</p>
            

        </div>
    }
}
export default CompB