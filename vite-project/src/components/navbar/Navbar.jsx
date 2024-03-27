import React from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/')
  }
  return (
    <nav>
        <div className="container">
            <div className="logo" onClick={handleClick} style={{cursor: "pointer"}}>Product Management System</div>
            <ul className="nav-links">
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> */}
            </ul>
            <Link to="/addproduct" className="add-product-btn">Add Product</Link>
        </div>
    </nav>
  )
}

export default Navbar

