import React from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

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

                {/* type will be passed into our CustomButton component as a prop and will be accessed by our component in the otherProps spread. */}
                {/* Sign In will be passed into our CustomButton component as a children */}
                <CustomButton type="submit">Sign In</CustomButton>
            </div>
        )
    }
}

export default SignIn;