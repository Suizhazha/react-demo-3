import React from 'react';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {x:1}
  }
  onClick = ()=>{
    this.setState((state)=>({
      x:state.x+1
    })
    )
  }
  render() {
    return(
      <div className='App'>
        App
        <button onClick={this.onClick}>+1</button>
        <B name={this.state.x}/>
      </div>
    )
  }
}

class B extends React.Component{

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(`旧的props:`)
    console.log(this.props)
    console.log('props变化了')
    console.log(nextProps)
  }
  constructor() {
    super();
  }
  render() {
    return(
      <div>{this.props.name}</div>
    )
  }
}

export default App;
