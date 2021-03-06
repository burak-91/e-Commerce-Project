import React from 'react'
import "./sign-up.style.scss";

import FormInput from './../form-Input/formInput.component'
import CustomButton from './../customButton/customButton.component'

import {auth,createUserProfileDocument} from '../../Firebase/firebase.utils'


class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault()

        const {displayName,email,password,confirmPassword} = this.state

        if(password!==confirmPassword){
            alert("passwords do not match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
      
            await createUserProfileDocument(user, { displayName });
      
            this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } catch (error) {
            console.error(error);
          }
        };
      

        
    

    handleChange = (e) =>{
        e.preventDefault()

        const{name,value} = e.target;
        this.setState({ [name]:value })
    }


    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have any accout</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='email' placeholder="email" required/>
                    <FormInput type='name' name='displayName' value={displayName} handleChange={this.handleChange} label='name' placeholder="name" required/>
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='password' placeholder="password" required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='confirmPassword' placeholder="Confirm Password" required/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;