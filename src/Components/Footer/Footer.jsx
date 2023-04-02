import './Footer.css'
import { ReactComponent as SCEicon } from "../../Assets/SCEicon.svg";

const Footer = () => {
    return (
<section id='Footer'  className='Footer'>
    <div className="footerCard flex">
        <div className="footerIntro flex">
            <div className="logoDiv">
                <a href="#" className="logo flex"><h1><SCEicon className='icon' />  Warehouse.</h1></a>
            </div>
        </div>
    </div> 
</section>

)
  
}

export default Footer