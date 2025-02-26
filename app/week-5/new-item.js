"use client";

import { useState } from "react";

export default function NewItem() {
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
    const handleSubmit = () => {
        const item = { name, quantity, category };
        alert(`Added item: ${name} Quantity: ${quantity} Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    // Returns a form that allows the user to input an item name, quantity, and category. Calls the increment and decrement functions when the buttons are clicked. Calls the handleSubmit function when the form is submitted
    return (
        <div className=" items-center p-2 m-2 bg-white text-black">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Item Name:
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} required className="border p-2 rounded text-black"/>
                    </label>


                    <label className="flex justify-center">
                        Quantity:
                        <div className="flex justify-center p-2 m-4 bg-red-600 text-green-500 w-36">
                            <button type="button" onClick={decrement} className="w-8 bg-blue-600 text-black hover:bg-blue-950 disabled:bg-gray-400" disabled={quantity == 1}>-</button>
                            <span className="m-2">{quantity}</span>
                            <button type="button" onClick={increment} className="w-8 bg-blue-600 text-black hover:bg-blue-950 disabled:bg-gray-400" disabled={quantity == 20}>+</button>
                        </div>
                    </label>

                    <label className="flex justify-center">
                        Category:
                        <select value={category} onChange={(event) => setCategory(event.target.value)} className="p-2 text-black">
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
                    </label>
                </div>

                <button type="submit" className="p-2 bg-slate-600 text-white rounded hover:bg-slate-900">Submit</button>
            </form>
        </div>
    );
}
