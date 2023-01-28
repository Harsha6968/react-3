import React from 'react'
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
     this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
      this.setState({password:event.target.value})  
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        <pre>{JSON.stringify(this.state)}</pre>
        return <div className='container-mt-4 '>
<div className='row'>
    <div className='col-sm-4'>
        <div  className='card' >
            <div className='card-header'>
                <div className='card-footer'>
                <h2>Login Details</h2>
                <br />
        <form>
            <label>Email</label><br />
            <input type="text" onChange={this.emailHandler}/>
            <br /><br />
            <label>Password</label><br />
            <input type="password" onChange={this.passwordHandler} />
            <br /><br />
            <input type="submit" value="login" />
        </form>
                </div>
            </div>
        </div>

    </div>

</div>
        </div>
    }
}
export default Login