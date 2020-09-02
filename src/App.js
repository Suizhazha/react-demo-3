import React, {useEffect} from "react"


const App = (props) => {
  const [n, setN] = React.useState(0)
  const onClick = () => {
    setN(n + 1)
  }

  const [nUpdateCount, setNUpdateCount] = React.useState(0)

  useEffect(() => {
    setNUpdateCount(n=>n+1)
  }, [n])

  useEffect(() => {
    if (nUpdateCount>1){
      console.log("n变了")
    }
  }, [nUpdateCount])

  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}


export default App

