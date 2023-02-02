import React from 'react'
class Class extends React.Component{
    state={message:"hello"}
    gmHandler=()=>{
        this.setState({message:"gm"})
    }
    gnHandler=()=>{
        this.setState({message:"gn"})
    }
render(){
    return <>
    <h1>Wish message:{this.state.message}</h1>
      <button onClick={this.gmHandler}>GM</button>
      <button onClick={this.gnHandler}>GN</button>
    </>
}
}
export default Class