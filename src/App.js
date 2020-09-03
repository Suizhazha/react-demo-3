import React from "react"
import ReactDOM from "react-dom"



const myUseState = initialValue =>{
  console.log(`App运行了！`)

  //此版本每次运行都会将初始值0赋给state,所以不会变
  let state = initialValue
  const setState = (newValue) =>{
     state = newValue
      render()
  }
  return  [state,setState]
}

const render = ()=>{
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

const App = (props) => {
  const [n, setN] = myUseState(0)
  return (
    <>
      <div>
        {n}
      </div>
      <button onClick={()=>{setN(n+1)}}>+1</button>
      </>
  )
}


export default App

