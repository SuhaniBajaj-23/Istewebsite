import './navbar.css';
import logo from '../src/istelogo.png';

function Navbar() {
    return (
      <div className="header" >
        <img  className="istelogo" src={logo} ></img>
        <div className="logocontent"> 
        <div className="cone">ISTE</div>
        <div className="ctwo">Student Chapter</div>
        <div className="ctwo">VIT Vellore</div>
        </div>
        <div className="header_nav">
          <div className="header_option">
              <span className="header_optionLineOne">
                  Home
              </span>
          </div>
        <div className="header_option">
            <span className="header_optionLineOne">
                Our Team
            </span>
        </div>
        <div className="header_option">
            <span className="header_optionLineOne">
                Gallery
            </span>
        </div>
        <div className="header_option">
            <span className="header_optionLineOne">
                About Us
            </span>
        </div>
        </div>

        
      </div>
    );
  }
  
  export default Navbar;