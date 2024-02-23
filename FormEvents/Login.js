import React, { useState } from 'react'

const Login = ()=>{
    const[emailText,SetEmailText] =useState('');
    const[password,SetPassword] = useState('');
    const[errorMsg,SetErrorMsg] = useState('');
    
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(emailText===""||password==""){   
            SetErrorMsg("please provide both email and password");
        }
        else{
            SetErrorMsg(`username:${emailText} and password:${password}`)
        }
    };
  return (
    <form ClassName ="formContainer" onSubmit={handleSubmit}>
      <div ClassName="form-group">
        <label htmlFor='emailText'>Email Address</label>
        <input type= "Email" className="Form-control" id="EmailText"
        aria-describedby='email Help' placeholder = "Enter Email"
        value = {emailText}
        onChange={(event)=>{
        SetEmailText(event.target.value)
  }} />
  </div> 
      <div ClassName="form-group">
        <label htmlFor='password'>password</label>
        <input type= "password" className="Form-control" id="password"
        aria-describedby='email Help' placeholder = "Enter password"
        value = {password}
        onChange={(event)=>{
        SetPassword(event.target.value);
   }}/>
  </div> 
  <button type = "submit" className='btn btn-primary btnconatainer'>
    Login
  </button>
  {errorMsg && <h1>{errorMsg}</h1>}         
 </form>
  );
  }
export default Login;