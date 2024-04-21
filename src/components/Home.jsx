// import React, { useContext, useState } from 'react';
// import { DataContext } from '../App';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './toastStyles.css';

// const Home = () => {
//     const { addToCart, data } = useContext(DataContext);

//     const handleAddToCart = (item) => {
//         addToCart(item);
//         notify();
//     };

//     const notify = () => {
//         toast("Added to Cart!", {
//             className: 'custom-toast'
//         });
//     };

//     return (
//         <div className="product-container">
//             <h1>Products</h1>
//             <div className="product-grid">
//                 {/* {data.map(item => (
//                     <div key={item.id} className='card'>
//                         <div className='card1'>
//                             <h3>Category: </h3><span>{item.category}</span>
//                         </div>
//                         <img src={item.images[0]} alt="" />
//                         <div className='card1'>
//                             <h3>Brand: </h3><span>{item.brand}</span>
//                         </div>
//                         <div className='card1'>
//                             <h3>Price: </h3><span>${item.price}</span>
//                         </div>

//                         <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//                     </div>
//                 ))} */}
//                 {data.smartphones && data.smartphones.map((item) => (
//                     <div className="info" key={item.id}>
//                         <img src={item.images[0]} alt="" />
//                         <p>{item.title}</p>
//                     </div>
//                 ))}

//             </div>
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={true}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//                 transition:Bounce
//             />
//         </div>
//     )
// }

// export default Home;
