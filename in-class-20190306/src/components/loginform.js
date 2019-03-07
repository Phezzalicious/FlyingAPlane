import React, { Component } from 'react'
import EmailInput from './emailinput'
import PasswordInput from './passwordinput'
import Button from './submitbutton'
import { Errors } from './errors'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            linkVars: { path: '/Mapbox', var: '' }
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                //Validate email via RegEx: 
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 8 && value.match(/^(?=.*[0-9])/i) && value.match(/^(?=.*[A-Z])/i);
                fieldValidationErrors.password = passwordValid ? '' : ' is invalid, must contain 8 letters, 1 capital letter and 1 number';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    //if all is well sets true foreach: (in effect, will enable submit button)
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
        this.setState({ email: this.state.email })
       
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    
    render() {
        const btn ={
            btnStyle: 'btn btn-primary'
        };
        return (
            <form>
                <h2>Sign Up!</h2>
                <div className="container">
                    <Errors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <EmailInput onEmailInputChange={this.handleUserInput} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <PasswordInput onPasswordInputChange={this.state.handleUserInput} />
                </div>
                <div className="containter">
                <Button className={btn}>Submit</Button>
                </div>

            </form>
        )
    }
}

export default LoginForm;