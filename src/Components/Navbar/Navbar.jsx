import './Navbar.css'
import { ReactComponent as SCEicon } from "../../Assets/SCEicon.svg";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
<section id='Navbar'  className='Navbar'>
    <header className="header flex">
        <div className="logoDiv">
            <Link to="/" className="logo">
                    <h1><SCEicon className="icon" />Warehouse.</h1>
            </Link>
        </div>

        
    </header>



</section>
)
}

export default Navbar