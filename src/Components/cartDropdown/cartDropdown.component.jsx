import React from 'react'
import "./cartDropdown.style.scss"

import CustomButton from "./../customButton/customButton.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>Go to Checkout</CustomButton>
        
    </div>
)

export default CartDropdown;