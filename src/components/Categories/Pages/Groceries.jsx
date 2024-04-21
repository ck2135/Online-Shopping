import React, { useContext, useState } from 'react'
import { DataContext } from '../../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyle.css';
import Categories from '../Categories';

const Groceries = () => {

    const { addToCart, data } = useContext(DataContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAddToCart = (item) => {
        addToCart(item);
        notify();
    };

    const notify = () => {
        toast("Added to Cart!", {
            className: 'custom-toast'
        });
    };

    const viewImage = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='productInfo'>
            {/* <Categories /> */}
            <h1>Groceries</h1>
            <div className="product-grid">
                {data.groceries && data.groceries.map((item) => (
                    <>
                        <div key={item.id} className="card">
                            <div className='card1'>
                                <h3>Category: </h3><span>{item.category}</span>
                            </div>
                            <img src={item.images[0]} alt="" onClick={() => viewImage(item)}/>
                            <div className='card1'>
                                <h3>Brand: </h3><span>{item.brand}</span>
                            </div>
                            <div className='card1'>
                                <h3>Price: </h3><span>${item.price}</span>
                            </div>

                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </div>
                    </>
                ))}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="product-details">
                            <img src={selectedItem.images[0]} alt="Selected" />
                            <div className="modal-right">
                                <h4>Brand:</h4>
                                <p>{selectedItem.brand}</p>
                                <h4>Price: </h4>
                                <p>${selectedItem.price}</p>
                                <h4>Rating:</h4>
                                <p>{selectedItem.rating}</p>
                                <h4>Stock:</h4>
                                <p>{selectedItem.stock}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </div>
    )
}

export default Groceries
