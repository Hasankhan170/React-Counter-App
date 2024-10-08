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
        <h1 className="text-center mt-5">Counter App</h1>
    <div>

       
    <div style={{
      marginTop: '30px'
    }} className="container d-flex justify-content-center p-3 text-center">
    <div className="btn-1">
      {/* plus  */}
    <button
  style={{
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }} className="btn btn-success mx-3 mb-3 px-0 py-0" onClick={counterPlus}><i className="fa-solid fa-plus"></i></button>
       
    </div>
         
      <div className="para">
      <p className="text-center  mt-3 fs-1">{num}</p>
      </div>

         <div className="btn-2">
          {/* minus  */}

         <button
  style={{
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }} className="btn btn-danger mx-3 mb-3 px-0 py-0" onClick={counterMinus}><i className="fa-solid fa-minus"></i></button>

         </div>
    </div>

  <div className="btn-3 d-flex justify-content-center">
    {/* reset  */}
  <button
  style={{
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }} className="btn btn-warning mx-3 mb-3 px-0 py-0" onClick={counterReset}>Reset</button> 
  </div>
    </div>
</div>

  )
}

export default App;




