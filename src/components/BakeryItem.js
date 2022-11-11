// TODO: create a component that displays a single bakery item
import "../App.css";
import { useState } from "react";

export default function BakeryItem(props) { // can also just say BakeryItem({name, price})
    // Could also be BakeryItem () => 

    // Way 1 of referencing props: passing in props as a parameter: BakeryItem(props)
    // const image = props.image
    // const name = props.name
    // const price = props.price
    // const setCart = props.setCart
    // const cart = props.cart

    const handleClick = () => {
        props.setCart([... props.cart, props.name])
        // console.log(cart)
    }

    return (
        <div>

        <div className="ItemInfo">
        <img src={props.image} alt="food pics"/>
        <p className='ItemDescriptions'>{props.name}</p> 
        <p className='ItemDescriptors'> Price: ${props.price} </p> </div>

        <button onClick={handleClick}> Add to Cart </button>
        </div>
    );
}


