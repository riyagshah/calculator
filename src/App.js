
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { inc,dec,mul1,div1,sub1,add1 } from './action';
import {useState} from 'react'
function App() {
  const dispatch = useDispatch();
  const count =useSelector((state)=>state.count)
  // const x=useSelector((state)=>state.x)
  const [x,setx] = useState("")

  return (
    <div className="App">
    <div>
    <h1>counter:{count}</h1>
    <input type="number" value={x} onChange={e=>setx(e.target.value)}/>
    </div>

<button onClick={()=>dispatch(inc())}>-</button>
<button onClick={()=>dispatch(dec())}>+</button>
<button onClick={()=>dispatch(add1(x))}>Add</button>
<button onClick={()=>dispatch(sub1(x))}>Sub</button>
<button onClick={()=>dispatch(mul1(x))}>mul</button>
<button onClick={()=>dispatch(div1(x))}>div</button>
</div>
  );
}

export default App;
