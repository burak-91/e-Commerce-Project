import React from "react";
import "./shoppage.style.scss";
import SHOP_DATA from "./shop.data"

import ColletionPreview from "../../Components/colletion-preview/colletionPreview.component"

class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}=this.state
        return(
            <div className='shop-page'>
                {collections.map(({id,...otherColletionItem})=>(
                    <ColletionPreview key={id} {...otherColletionItem}/>
                ))}
            </div>
        )
    }


}



export default ShopPage;