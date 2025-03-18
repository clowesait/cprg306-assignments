"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    // constants for name, quantity, and category. set functions to update values
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    
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
    
    // function that's called when form is submitted. alerts the user with the item name, quantity, and category. resets the name, quantity, and category to default values
    const handleSubmit = (event) => {
        //prevents the page from refreshing
        event.preventDefault(); 
        //creates random id for item
        const item = { id: crypto.randomUUID(), name, quantity, category };
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
            <form onSubmit={handleSubmit} className="bg-slate-900 p-4 max-w-fit rounded-lg space-y-4">

                <label>
                    <input type="text" placeholder="Item name" value={name} onChange={(event) => setName(event.target.value)} required className="border w-full p-2 rounded text-black"/>
                </label>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 px-2 py-1 rounded-md">
                            <div className="flex justify-center m-6 bg-white w-full text-black rounded-md">
                                <button type="button" onClick={decrement} className="w-8 mr-4 rounded-md bg-orange-400 text-black hover:bg-orange-600 disabled:bg-gray-400" disabled={quantity == 1}>-</button>
                                <span className="m-2">{quantity}</span>
                                <button type="button" onClick={increment} className="w-8 ml-4 rounded-md bg-orange-400 text-black hover:bg-orange-600 disabled:bg-gray-400" disabled={quantity == 20}>+</button>
                            </div>

                            <select value={category} onChange={(event) => setCategory(event.target.value)} className="p-2 rounded-md text-black">
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                    </div>
                </div>

                <button type="submit" className="p-2 w-full bg-slate-600 text-white rounded hover:bg-orange-600">Submit</button>
            </form>
    );
}
