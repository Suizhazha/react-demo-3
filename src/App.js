import React from "react"


const App =(props)=>{
  const [n,setN] = React.useState(0)
  const onClick = ()=>{
    setN(n+1)
  }
   React.useEffect(()=>{
     console.log('第一次render')
   },[])

  return (
    <div>{n}
    <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App

