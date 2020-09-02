import React, {useEffect} from "react"


const App = (props) => {
  const [childVisible,serChildVisible] = React.useState(true)
const show = ()=>{
    serChildVisible(true)
}
const hide = ()=>{
    serChildVisible(false)
}
  return (
    <div>
      {childVisible ?
        <button onClick={hide}> hide </button>
      :
        <button onClick={show}> show </button>
      }
      {childVisible ? <Child/> : null}
    </div>
  )
}

const Child = (props) => {
  useEffect( ()=>{
    return ()=>{
      console.log('child要销毁了')
    }
  })

  return (
    <div>Child</div>
  )
}


export default App

