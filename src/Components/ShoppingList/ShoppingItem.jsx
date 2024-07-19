import React from 'react'

export default function ShoppingItem({ id, itemName, quantity, deleteItem }) {
    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    return (
        <li>{itemName} ({quantity}) <button onClick={handleDelete}>Delete</button></li>
    );
}
