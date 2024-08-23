import { useState } from "react";





const App = ()=>{
  let [num,setNum] = useState(0)

  const counterPlus = ()=>{
    setNum(num + 1)
  }

  return (
    <>
        <h1>hello World</h1>
        <p>{num}</p>
        <button onClick={counterPlus}>click</button>
    </>

  )
}

export default App;
