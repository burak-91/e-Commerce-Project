import React from "react"
import "./signIn.style.scss";

import FormInput from "./../form-Input/formInput.component"
import CustomButton from "./../customButton/customButton.component"



class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email : '',
            password : ''
        }
    }

    handleSubmit =(e)=>{
        e.preventDefault()

        this.setState({email:'',password:''})
    }

    handleChange = (event) =>{
        const {value,name} = event.target

        this.setState({ [name]:value })
    }



    render(){
        return(
            <div className='sign-in'>
               <h2>I have already an account</h2>
               <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" placeholder="email" value={this.state.email} handleChange={this.handleChange} required/>
                    
                    <FormInput type="password" name="password" placeholder="password" value={this.state.password} handleChange={this.handleChange} required/>

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;