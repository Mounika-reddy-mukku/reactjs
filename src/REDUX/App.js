import React from 'react'
import Message from './Message'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { store } from './REDUX/store'
class App extends React.Component{
    render(){
        return <React.Fragment>
            <Provider store={store}>
            <h2>App Component</h2>
            <hr/>
            <Message/>
            </Provider>
        </React.Fragment>
    }
}
export default App