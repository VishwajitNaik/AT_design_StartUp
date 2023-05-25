import React, { useState } from 'react'
import './Header.css'
import logo from "../pic/f_logo.png"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { navItems } from './NaveItems'


const Header = () => {

    //When scroll header at top
    window.addEventListener("scroll", function() {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    // togle menu
    const [Phone, setPhone] = React.useState(false)
    const [dropdown, setDropdown] = useState(false);

    return (
    <>
    <header className='header'>
        <div className="container d_flex">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlink">
                    <ul className={Phone ? "nav-links-moblie" : "link f_flex uppercase"} onClick={() => setPhone(false)} >
                    <Link to={"/"}> <li><a>Home</a></li></Link>
                    <li><a href="#aboutus">About us</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <Link to={"/careers"} > <li>Careers</li> </Link>
                    {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
                    
                    <li><a href="#blog">blog</a></li>
                    <li><a href="#contact">contact us</a></li>
                    <li> <button className='home-btn'>Start Free triel</button></li>
                </ul>

                <button className='toggle' onClick={() => setPhone(!Phone)}>
                    {Phone ? 
                        <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>} 
                </button>

                
            </div>
        </div>
    </header> 

        <section className='demo'></section>

    </>
  )
}

export default Header



