import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utiles';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            this.setState({ 
                password: '',
                confirmPassword: ''
            });
            return;
        }

        try {
            // The .createUserWithEmailAndPassword() method comes from the firebase auth lib.

            // The .createUserWithEmailAndPassword() method creates a new user account
            // associated with the specified email address and password.

            // 1st argument takes in the email.
            // 2nd argument takes in the password.

            // If successful then the user account is created and the user is logged into the 
            // application.

            // Account creation fails if the user already exists or if the password is invalid.

            // Returns a user auth object.
            // We want the user auth object but in order to access it we need access to the property/key
            // user which the user auth object we want is a value of. Hence the reason why we are destructuring
            // the user property/key. 
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, { displayName });

            // Clears our state after submit.
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });            

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = e => {
        const { value, name} = e.target;        
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />                    

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required                        
                    />                    

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required                        
                    />                    

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required                        
                    />

                    <CustomButton type="submit" onClick={this.handleSubmit}>SIGN UP</CustomButton>                

                </form>
            </div>
        );
    }
}

export default SignUp;