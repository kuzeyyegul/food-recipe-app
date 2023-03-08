import {Link} from "react-router-dom";
import "./Header.scss";
import { MdFoodBank} from "react-icons/md";

const Navbar = () => {
  return (

          <div className='brand'>
            <Link to = "/food-recipe-app" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank />
              <span className='navbar-brand-text fw-7'>Foodie</span>
            </Link>
            </div>
  )
}

export default Navbar