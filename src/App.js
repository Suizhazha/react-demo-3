import React from "react"


class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      n: 0
    }
  }

  onClick = () => {
    this.setState((state) => (
      {
        n: state.n + 1

      }
    ))
  }

  render() {
    return (
      <>
        {this.state.n % 2 ? <div>偶数</div> : <div>奇数</div>}
        <button onClick={this.onClick}>+1</button>
      </>
    )
  }
}

export default App
