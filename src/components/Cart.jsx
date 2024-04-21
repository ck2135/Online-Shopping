import React, { useContext, useState } from 'react';
import { DataContext } from '../App';
import '../App.css';
import Success from './Success';

const Cart = () => { 

    const { cartItems, setCartItems } = useContext(DataContext);
    const [successMessage, setSuccessMessage] = useState('');

    const handleIncrement = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: (item.quantity || 0) + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const handleDecrement = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = (item.quantity || 1) - 1;
                if (newQuantity <= 0) {
                    return null;
                } else {
                    return { ...item, quantity: newQuantity };
                }
            }
            return item;
        }).filter(Boolean);
        setCartItems(updatedCartItems);
    };

    const totalPrice = cartItems.reduce((a, b) => a + ((b.price * b.quantity) || 0), 0);

    const handleSuccess = () => {
        if (totalPrice > 0) {
            setSuccessMessage('Your payment is successful!');
            setCartItems([]);
        }
    };

    return (
        <div className='cart'>
            {successMessage ? (
                <Success />
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className='addCart'>
                            <img src={item.images[0]} alt="" />
                            <div className="buttons">
                                <input type="button" value="-" onClick={() => handleDecrement(item.id)} />
                                <p>{item.quantity || 1}</p>
                                <input type="button" value="+" onClick={() => handleIncrement(item.id)} />
                            </div>
                            <h4>{item.brand}</h4>
                            <p>$ {(item.price * item.quantity) || 0}</p>
                        </div>
                    ))}

                    <div className="total">
                        <h3>Total Amount: </h3><span>$ {totalPrice}</span>
                    </div>
                    <button onClick={handleSuccess} id='payment'>PLACE ORDER</button>
                </>
            )}
        </div>
    );
}

export default Cart;
