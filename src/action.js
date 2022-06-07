import { COUNTER_DECREMENT, COUNTER_INCREMENT,add,sub,mul,div} from "./action.type"

export const inc=()=>({type:COUNTER_DECREMENT})
export const dec=()=>({type:COUNTER_INCREMENT})
export const add1=(x)=>({type:add,payload:x})
export const sub1=(x)=>({type:sub,payload:x})
export const mul1=(x)=>({type:mul,payload:x})
export const div1=(x)=>({type:div,payload:x})
