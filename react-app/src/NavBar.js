import {NavLink} from 'react-router-dom';
    
function Navbar() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="">
            Home
          </NavLink>
        </li> 
  
        <li className="nav-item">
          <NavLink className="nav-link" to="/what-movies">
            What movies is he in?
          </NavLink>
        </li> 
  
        <li className="nav-item">
          <NavLink className="nav-link" to="/guess-time">
            Guess the time
          </NavLink>
        </li>
      </ul>
    );
  }
  export default Navbar;