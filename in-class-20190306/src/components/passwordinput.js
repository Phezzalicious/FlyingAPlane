import React from 'react';
const PasswordInput = (props) => {
  const onPasswordChange = (event) => { 
    var password = event.target.value;

    this.props.onPasswordInputChange(password);
  };

return (
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
    aria-describedby="passwordHelp"
    className="form-control"
    id="exampleinputpassword1"
    onChange={onPasswordChange}
    placeholder="Enter Password"
    type="password"
    value={props.password} 
    />
  </div>
);
}
export default PasswordInput;