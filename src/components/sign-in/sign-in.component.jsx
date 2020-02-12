import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utiles';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        /*
            We are setting up signing in with a users email and password that they used
            to create a user account on our app.
        
        */
        
        const { email, password } = this.state;

        try {

            // .signInWithEmailAndPassword() is from our firebase auth lib.
            // Asynchronously signs in using an email and password. Fails with an error if the email address and password do not match.
            await auth.signInWithEmailAndPassword(email, password);

            // Rests the state of our component which will also clear the email and password
            // fields on the sign-in form.
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }        
        
    }

    handleChange = e => {
        const { value, name} = e.target;        
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email" 
                        required 
                    />                    

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label="Password"
                        required 
                    />                    
                </form>

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
                </div>


            </div>
        )
    }
}

export default SignIn;