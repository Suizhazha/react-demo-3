import React from "react"


class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.divRef = React.createRef()
    this.state = {
      width: undefined
    }
  }

  componentDidMount() {
    const div = this.divRef.current
    console.log(div)
    const {width} = div.getBoundingClientRect()
    this.setState({width})
    console.log('render了')
  }

  render() {
    return (
      <div ref={this.divRef}><p>Hello World,{this.state.width}</p></div>
    )
  }
}

export default App
