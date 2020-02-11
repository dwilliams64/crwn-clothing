import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Imports our google sign in pop from our fire base utilites.
import { signInWithGoogle } from '../../firebase/firebase.utiles';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();        
        this.setState({email: '', password: ''});
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

                    {/* isGoogleSignIn is a prop that we will pass into our CustomButton class. This will allow us to dynamically add  
                    a class on one of our button components. When a prop is passed in with no value it will automatically evaluate
                    to true. If isGoogleSignIn is present then the value of true will be passed in by the isGoogleSignIn prop into 
                    our CustomButton component. */}
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
                </div>


            </div>
        )
    }
}

export default SignIn;