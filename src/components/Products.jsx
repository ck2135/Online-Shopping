import React, { useEffect, useState } from 'react';
import '../App.css';

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data.products)
            })
    })

    return (
        <div className="products1">
            <div className="product-grid">
                {data.map(item => (
                    <div key={item.id} className='card'>
                        <img src={item.images[0]} alt="" />
                        <div className='card1'>
                            <h3>{item.brand}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
