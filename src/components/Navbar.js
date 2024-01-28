import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../pages/ShoppingCartPage.css";
import SearchBar from "./searchbar";

function Navbar() {
  const [click, setClick] = useState(false);
  const [cartShow, setCart] = useState(false);

  const handleMenuToggle = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const closeCart = () => {
    setClick(false);
    setCart(!cartShow);
  };

  return (
    <>
      <nav className="navbar-top-desktop">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleMenuToggle}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div className="company-name">Stellar Sprint</div>
          
          <div className="links-container">
            <ul className={click ? "nav-menu show" : "nav-menu"}>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-home" />
                <Link to="/stellar-sprint/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-info-circle" />
                <Link
                  to="stellar-sprint/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-user-alt" />
                <Link
                  to="stellar-sprint/user/signup"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-sign-in-alt" />
                <Link
                  to="stellar-sprint/user/signin"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fa fa-cubes" />
                <Link
                  to="stellar-sprint/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-items" onClick={closeCart}>
                <Link className="nav-links" onClick={closeCart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg> Cart
                </Link>
              </li>
            </ul>
          </div>

            <div className="nav-desktop">

              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-home" />
                <Link to="stellar-sprint/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-info-circle" />
                <Link
                  to="stellar-sprint/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  >
                  About Us
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fas fa-sign-in-alt" />
                <Link
                  to="stellar-sprint/user/signin"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  >
                  Sign In
                </Link>
              </li>
              <li className="nav-items" onClick={closeMobileMenu}>
                <i className="fa fa-cubes" />
                <Link
                  to="stellar-sprint/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  >
                  Products
                </Link>
              </li>
              <li className="nav-items" onClick={closeCart}>
                <Link className="nav-links" onClick={closeCart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    viewBox="0 0 576 512"
                    >
                    <path
                      fill="#ffffff"
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                      />
                  </svg>
                </Link>
              </li>
            </div>

          <div className="nav-search">
            <SearchBar />
          </div>
        </div>
      </nav>

      <div className={cartShow ? "cartbody" : ""}>
        <div className={cartShow ? "cart-show" : "cart"}>
          <div className="closeCart">
            <button
              className="btnCloseCart fas fa-times"
              onClick={closeCart}
            ></button>
          </div>
          <h3>It seems your cart is empty.</h3>
          <img src="./cart.jpg" alt=""></img>
          <button className="clickContinue">
            <a href="/products">Continue Shopping</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
