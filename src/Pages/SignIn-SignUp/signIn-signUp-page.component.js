import React from "react";
import "./signIn-signUp.style.scss";

import SignIn from "../../Components/signIn/signIn.component"
import SignUp from "../../Components/sign-up/sign-up.component"


const SignInAndSignUp = () =>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUp;