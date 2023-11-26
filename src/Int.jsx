// import React from 'react'
// class Int extends React.Component{
//     state={colur:["red","green","blue"]}
//     ChangeHandler=()=>{
//         this.setState({})
//     }
//     render(){
//         return <>
//             <button onClick={ChangeHandler}>Click</button>
//         </>
//     }
// }
// export default Int
import React, { useState } from 'react';
const App = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

     const changeBackgroundColor = () => {
    setCurrentColorIndex((prev) => {
        const current=prev+1;
        return current>colors.length? 1 : current;

    });
    };

    document.body.style.backgroundColor=colors[currentColorIndex-1]

    return <>
    
      <button onClick={changeBackgroundColor}>Change Color</button>
    </>
  
};

export default App;