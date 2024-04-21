import React from 'react';
import { Link } from 'react-router-dom';
import smartphone from '../../assets/smartphones.jpg'
import laptop from '../../assets/laptop.png'
import fragrance from '../../assets/fragrance.jpg'
import skincare from '../../assets/skincare.png'
import groceries from '../../assets/groceries.jpg'
import decoration from '../../assets/decoration.jpg'


const Categories = () => {
  return (
    <>
      <div className='categories'>
        <h1>Categories</h1>
        <div className="subCategories">
          <div className="links">
            <img src={smartphone} alt="" />
            <Link to='/categories/smartphones'>
              <h3>Smartphones</h3>
            </Link>
          </div>
          <div className="links">
            <img src={laptop} alt="" />
            <Link to='/categories/laptops'>
              <h3>Laptops</h3>
            </Link>
          </div>
          <div className="links">
            <img src={fragrance} alt="" />
            <Link to='/categories/fragrances'>
              <h3>Fragrances</h3>
            </Link>
          </div>
          <div className="links">
            <img src={skincare} alt="" />
            <Link to='/categories/skincare'>
              <h3>Skincare</h3>
            </Link>
          </div>
          <div className="links">
            <img src={groceries} alt="" />
            <Link to='/categories/groceries'>
              <h3>Groceries</h3>
            </Link>
          </div>
          <div className="links">
            <img src={decoration} alt="" />
            <Link to='/categories/homedecoration'>
              <h3>Home-decoration</h3>
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default Categories
