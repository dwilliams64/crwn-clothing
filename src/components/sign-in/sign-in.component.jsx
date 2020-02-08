import React from 'react';

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

        this.state.setState({email: '', password: ''});
    }

    handleChange = e => {
        const { value, name} = e.target;
    
        this.state.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required 
                    />
                    <label>Email</label>

                    <imput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleChange} 
                        required 
                    />
                    <label>Password</label>
                </form>

                <input type="submit" value="submit form"/>
            </div>
        )
    }
}

export default SignIn;