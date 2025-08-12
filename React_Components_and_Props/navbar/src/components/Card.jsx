import React from 'react'
import './Card.css'; // Assuming you have a CSS file for styling
const Card = () => {
  return (
    <div className='Card'>  
      <h2>Monitor</h2>
      <p>50 inch LED Monitor, AMOLED display</p> 
        <img src="https://images.samsung.com/is/image/samsung/p6pim/in/ls27cg550ewxxl/gallery/in-odyssey-g5-g55c-ls27cg550ewxxl-541041256?$684_547_PNG$" alt="Card Image" width = {233}/>
        <p>Price: $19.99</p>
        <p>Rating: ★★★★☆</p>
        <p>Category: Electronics</p>
        <p>Available Stock: 50</p>
        <p>Release Date: 2023-01-01</p>
        <button>Add to Cart</button>
        <button>Learn More</button>
        

    </div>
  )
}

export default Card
