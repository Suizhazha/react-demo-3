import React from "react"
import ReactDOM from "react-dom"



//将变量放在外面，就不会每次将state重置。
let state = undefined


const myUseState = initialValue =>{
  console.log(`App运行了！`)
  state = state === undefined ? initialValue: state
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

