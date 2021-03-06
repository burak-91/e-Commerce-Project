import React from 'react'
import './cartIcon.style.scss';

import {connect} from 'react-redux'
import {ReactComponent as ShoppingCart} from "./../../Asserts/shopping-bag.svg"
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartIcon = ({toggleCartHidden}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
       <ShoppingCart className="shopping-icon"/>
       <span className="item-count">0</span> 
    </div>
)

const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);


