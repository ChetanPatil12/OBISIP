import React from 'react'
import pizza_home from '../imgs/homePage/pizza_home.png';
import leaf1 from '../imgs/homePage/leaf1.png';
import leaf2 from '../imgs/homePage/leaf2.png';
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <>
    
    <div className='home-container'>
        <div className='home-left'>
            <p className='heroText'>Pizzy</p>
            <p className='heroDescription'>Fresh, hot and delicious pizzas, made just for you</p>
            <p className='aboutCompany'>Our pizza delivery company is dedicated to bringing the best and freshest pizzas right to your doorstep. Our chefs use only premium ingredients to create a wide variety of delicious pizzas, each one made to order just for you.</p>
            <Link to="/menu">
                <button>Order Now</button>
            </Link>
            
        </div>
        <div className="home-right">
            <img className="leaf1" src={leaf1} alt="" />
            <div>
            <img className='leaf2' src={leaf2} alt="" />
            <img className='pizza-home' src={pizza_home} alt="pizza-img" />
        </div>
        </div>
      </div>
      </>
  )
}

export default Home
