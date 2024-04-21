import React from 'react';
import succes from '../assets/success1.gif'

const Success = () => {
  return (
    <div className='success'>
      <h2>Payment is successfully done</h2>
      <p>Please keep shopping with us!</p>
      <img src={succes} alt="succes"/>
    </div>
  )
}

export default Success
