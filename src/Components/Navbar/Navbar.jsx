import './Navbar.css'
import { ReactComponent as SCEicon } from "../../Assets/SCEicon.svg";
import {Link} from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('navBar')


    //function to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    //function to remove navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    const [user, loading] = useState('admin');


    var userData=null;
    userData = 'admin';


 

    return (
<section id='Navbar'  className='Navbar'>
    <header className="header flex">
        <div className="logoDiv">
            <Link to="/" className="logo">
                    <h1><SCEicon className="icon" />Warehouse.</h1>
            </Link>
        </div>
        <div className={active}>
                    <ul onClick={removeNavbar} className="navLists flex">

                        <li className="navItem">
                            <Link  to="/" className="navLink">Home</Link>
                        </li>
                        <li className="navItem">
                        <a href="/Sing-up" className="navLink">Signup</a>
                        </li>
                        {user && userData == 'admin' &&
                        <li className="navItem">
                            <Link  to="admin" className="navLink">admin</Link>
                        </li>}

                       
                        <li className="navItem">
                            <Link  to="Myorders" className="navLink">My Orders</Link>
                        </li>

                    </ul>


                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>       
                
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
    </header>



</section>
)
}

export default Navbar