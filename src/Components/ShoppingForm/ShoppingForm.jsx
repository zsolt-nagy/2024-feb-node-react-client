import React, { useState } from 'react';

export default function ShoppingForm({ addItem }) {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addItem(item, quantity);
        setItem('');
        setQuantity('');
    }

    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input
                type="text" 
                required
                id="item"
                name="item"
                value={item}
                onChange={handleItemChange} />
            <label htmlFor="quantity">Quantity</label>
            <input 
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                required 
                min="0"
                onChange={handleQuantityChange} />
            <button type="submit">Add</button>
        </form>
    );
}
