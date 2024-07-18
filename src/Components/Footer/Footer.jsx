import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>Master Chef</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam reiciendis aut repudiandae vel debitis omnis esse voluptas consequuntur, ea voluptatum.</p>
                <div className="footer-social-icon">
                <a href="https://www.facebook.com/GeorgiaFoodKavkaz?mibextid=LQQJ4d"> <FontAwesomeIcon className='f' icon={faFacebookF} /> </a>
              <a href="https://www.instagram.com/mr_cheff7/?igsh=MWQ5am53Nnh5dWRzMA%3D%3D">  <FontAwesomeIcon className='i' icon={faInstagram} /></a>
     <a href="https://x.com/cristiano?s=21"> <FontAwesomeIcon className='t' icon={faTwitter} /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <li><Link to="/">Home</Link></li>
            <li><Link to="/footer">About us</Link></li>
            <li><Link to="/cart">Delivery</Link></li> 
            <li><Link to="/login">privacy policy</Link></li> 
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+252-61-5557616</li>
                    <li>contact@mr Chef.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyrigth">
        copyrigth 2024 @MR chef - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
