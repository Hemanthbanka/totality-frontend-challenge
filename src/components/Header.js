import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Link to="/" className="navbar-brand">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </div>
          <div className="col-md-6 text-right">
            <Link to="/cart" className="cart-link">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
