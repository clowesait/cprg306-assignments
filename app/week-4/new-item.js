"use client";

import { useState } from "react";

export default function NewItem() {
    // quantity = current value, setQuantity = function to update value
    const [quantity, setQuantity] = useState(1);

    // increment function that's called when button clicked. uses Setquantity function to update usestate value if current value isn't larger than 20
    const increment = () => {
        setQuantity(quantity => {
            if (quantity < 20) {
                return quantity + 1;
            } else {
                return quantity
            }
        });
    };

    // decrement function that's called when button clicked. uses Setquantity function to update usestate value if current value isn't smaller than 1
    const decrement = () => {
        setQuantity(quantity => {
            if (quantity > 1) {
                return quantity - 1;
            } else{
                return quantity;
            }
        });
    };    
    // Returns buttons that increment and decrement the quantity of an item and displays the current quantity
    return (
        <div className="flex justify-center p-2 m-4 bg-red-600 text-green-500 w-36">
            <button type="button" onClick={decrement} className="w-8 bg-blue-600 text-black hover:bg-blue-950 disabled:bg-gray-400" disabled={quantity == 1}>-</button>
            <span className="m-2">{quantity}</span>
            <button type="button" onClick={increment} className="w-8 bg-blue-600 text-black hover:bg-blue-950 disabled:bg-gray-400" disabled={quantity == 20}>+</button>
        </div>
    )
}