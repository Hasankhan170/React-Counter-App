import { useState } from "react";

const App = ()=>{

  let [num,setNum] = useState(0)

  const counterPlus = ()=>{
    setNum(num + 1)
  }

  const counterMinus = ()=>{
    if(num === 0){
      alert('Your current state is invalid')
      return
    }
    setNum(num -1)
  }

  const counterReset = ()=>{
    setNum(0)
  }

  return (
    <div className="text-center">
        <h1 className="text-center mt-3">Counter App</h1>
        <p className="text-center mt-3 fs-1">{num}</p>
    <div>
        <button  className="btn btn-success mx-3 mb-3 px-5 py-2" onClick={counterPlus}>Counter Add</button>
        <button className="btn btn-warning mx-3 mb-3 px-5 py-2" onClick={counterReset}>Counter Reset</button>
        <button className="btn btn-danger  mb-3 px-5 py-2" onClick={counterMinus}>Counter Minus</button>
    </div>
</div>

  )
}

export default App;
