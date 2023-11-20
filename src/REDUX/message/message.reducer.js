
let initialState={msg:"Hellooo.."}
let messageReducer=(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "GM":
            return{msg:"Good Morning"}
        case "GN":
            return{msg:"Good Night"}
        default:
            return state
    }

}
export {messageReducer}