import React from "react"
import "./header.style.scss"

import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../Asserts/crown.svg"
import {auth} from "../../Firebase/firebase.utils"
import {connect} from 'react-redux'
import CartIcon from '../cartIcon/cartIcon.component'
import CartDropdown from '../cartDropdown/cartDropdown.component';

const Header = ({currentUser,hidden}) => (
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
            <CartIcon  to="/cart"/>
        </div>
        {
            hidden ? null :  <CartDropdown/>
        }
       
    </div>
)

const mapStateToProps = ({user:{currentUser}, cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);