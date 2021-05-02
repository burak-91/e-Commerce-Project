import React from "react"
import "./header.style.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../Asserts/crown.svg"
import {auth} from "../../Firebase/firebase.utils"

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
        
                :
                <Link className="option" to="/signIn">Sign In</Link>
            }
            
        </div>
    </div>
)

export default Header