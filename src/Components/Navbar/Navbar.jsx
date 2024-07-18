import React, { useContext, useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../Context/StoreContext'; // Import the StoreContext to access the global state

const Navbar = ({ setShowLogin }) => {
  // Access getTotalCartAmount and getTotalItems from the StoreContext
  const { getTotalCartAmount, getTotalItems } = useContext(StoreContext);
  const totalItems = getTotalItems(); // Get the total number of items in the cart

  // State to keep track of the active menu item
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      {/* Link to the home page */}
      <Link to='./'> <h1>Master chef</h1> </Link>
      <ul className="navbar-menu">
        {/* Links to different sections with active class toggling */}
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#appdownload' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>

      <div className='navbar-right'>
        {/* Link to the login page */}
        <Link to='./login'>
          <FontAwesomeIcon className='mt-1' onClick={() => setShowLogin(true)} icon={faUser} />
        </Link>
        {/* Link to the cart page */}
        <Link to='./cart'>
          <FontAwesomeIcon className='mt-3' onClick={() => { getTotalCartAmount() }} icon={faShoppingCart} />
        </Link>
        {/* Display the total number of items in the cart */}
        <div className="nav-cart-count">{totalItems}</div>
      </div>
    </div>
  )
}

export default Navbar; 
