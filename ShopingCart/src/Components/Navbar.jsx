import React from "react";
import './Navbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import caretDownFill from 'bootstrap-icons/icons/caret-down-fill.svg';
import cartFill from 'bootstrap-icons/icons/cart-fill.svg';
import { useState } from "react";
import Cart from "./Cart";



const Navbar = () => {
    const [showList, setShowList] = useState(false)
    const handleClick = () => {
        setShowList(!showList)
    }

    return (
        <div>
            <div className="navbar">
                <ul className="navbarul">
                    <li>Start BootStrap</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop
                        <span onClick={handleClick}><img src={caretDownFill} alt="Chevron Right Icon" width="10" height="10" /></span>
                        {showList && (<ul className="sublist">
                            <li >Allproducts</li>
                            <li>Popular Items</li>
                            <li>New Arrivals</li>
                        </ul>)}

                    </li>
                    <li>
                        <button className="btn"> <img src={cartFill} alt="Cart Fill Icon" width="30" height="30" />Cart 0 </button>

                    </li>
                </ul>
            </div>
            <header className="bg-dark">
                <h1>Shop in style</h1>
                 <h3>With this shop hompeage template</h3>
     </header>
     <section > <Cart/></section>
     <footer className="py-5 bg-dark">
        <h5>Copyright © Your Website 2023</h5>
     </footer>
        </div>
    );
}

export default Navbar;