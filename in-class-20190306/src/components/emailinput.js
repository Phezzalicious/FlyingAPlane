import React from 'react';
const EmailInput = (props) => {
  const onEmailChange = (event) => { 
    var email = event.target.value;

    this.props.onEmailInputChange(email);
  };

return (
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
    aria-describedby="emailHelp"
    className="form-control"
    id="exampleinputemail1"
    onchange={onEmailChange}
    placeholder="Enter Email"
    type="email"
    value={this.state.email} 
    />
  </div>
);
}
export default EmailInput;