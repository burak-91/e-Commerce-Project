import React from "react"
import "./signIn.style.scss";

import FormInput from "./../form-Input/formInput.component"
import CustomButton from "./../customButton/customButton.component"

import {signInWithGoogle,auth} from '../../Firebase/firebase.utils'



class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : ''
        }
    }

    handleSubmit =async e =>{
        e.preventDefault()

        const {email,password} = this.state
    

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        } catch (error) {
            console.log(error)
        }


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

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;