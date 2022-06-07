

export const reducer =(state,action )=>{

switch(action.type) {
    case "COUNTER_INCREMENT":
    {
        state.count++;
        return {...state}
    }
    case "COUNTER_DECREMENT":{
        state.count--
        return {...state}
    }
    case "add":{
        state.count=parseInt(state.count)+parseInt(action.payload)
      
        return {...state}
    }
case "sub":{
    state.count=parseInt(state.count)-parseInt(action.payload)
}
case "mul":{
    state.count=(parseInt(state.count))*(parseInt(action.payload))
          
    return {...state}
}
case "div":{


    if(action.payload==0) {
        state.count="Not Posssible"
    }
    else
    {
        state.count=parseInt(state.count)/parseInt(action.payload)
    }
    
}
    default:{
        return {...state}
    }
}

}