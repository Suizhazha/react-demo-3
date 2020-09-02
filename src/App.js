import React from "react"


class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      array:[1,2,4,5]
    }
  }

  render() {
    return (
      this.state.array.map(item=><div key={item}>{item} </div>)
    )
  }
}

export default App
