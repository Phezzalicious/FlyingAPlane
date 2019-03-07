import React from 'react';
const EmailInput = (props) => {
  
// var EmailInputChange = (event) => {
 // var Email = event.target.value; 
 // props.onEmailInputChange(Email);
 //}
  return (
    <div>
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        name='email'
        aria-describedby="emailHelp"
        className="form-control"
        id="exampleinputemail1"
        onChange={props.onEmailInputChange}
        placeholder="Enter Email"
        type="email"
        value={props.email}
      />
    </div>
  )
}
export default EmailInput;