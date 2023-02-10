import React from 'react'
import { useState } from 'react';

const Menu = () => {
    
    const menu = [
        {img:"https://www.dominos.co.in/files/items/Farmhouse.jpg",
        names:"FarmHouse",
        disc:"A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
        },
        {
            img:"https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
            names:"PEPPY PANEER",
            disc:"Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
        },
        {
            img:"https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
            names:"MEXICAN GREEN WAVE",
            disc:"A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
        },
        {
            img:"https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg",
            names:"DELUXE VEGGIE",
            disc:"For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",
        },
        {
            img:"https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg",
            names:"VEG EXTRAVAGANZA",
            disc:"A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.",
        },
        {
            img:"https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg",
            names:"CHEESE N CORN",
            disc:"Cheese I Golden Corn | Cheese n Corn Pizza",
        },
        {
            img:"https://www.dominos.co.in/files/items/Fresh_Veggie.jpg",
            names:"FRESH VEGGIE",
            disc:"Onion & Capsicum.",
        },
        
    ]
    const [detail,setDetail] = useState(menu);
  return (
    <><div className='menuBody'>
    {detail.map((detail)=> {
        return(
            <div className="card">
      <div className="pizImg">
            <img src={detail.img} alt="" />
      </div>
      <div className="pizContent">
        <p className='cardHeading'>{detail.names}</p>
        <p className='cardDisc'>{detail.disc}</p>    
        <button className='cardButton'>ORDER</button>
      </div>
    </div>
        )
    })}
    </div>
    </>
  )
}

export default Menu
