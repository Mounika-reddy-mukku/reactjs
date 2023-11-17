
import React from 'react';
import Didmount from './lifecycle/Didmount';
import Normal from './lifecycle/Normal';
import Fav from './lifecycle/update/Fav';
import Snapshot from './lifecycle/update/Snapshot';

class App extends React.Component{
    render(){
        return <React.Fragment>
            <h2>App Component</h2>
            <hr/>
            <nav className='navbar navbar-dark bg-dark'>
                <a className='navar-brand' href='#'>Digital clock</a>
            </nav>
            <Snapshot/>
            

        </React.Fragment>
    }
}
export default App