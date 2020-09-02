import React from 'react';


class App extends React.PureComponent{
 constructor(props) {
   super(props);
   this.state = {
     n: 0
   }
 }
onClick = () =>{
 this.setState( (state) =>(
   {
     n:state.n+1
   }
 ))
  }
  render() {
   let message
    if (this.state.n %2){
      message = <div>偶数</div>
    }else {
      message = <div>奇数</div>
    }
    return (
      <>
        { message }
        <button onClick={this.onClick}>+1</button>
        </>
    )
 }
}

export default App;
