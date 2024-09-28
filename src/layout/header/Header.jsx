import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faBars, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons"
import './Header.css';
import { useOrder } from "../../context/OrderContex";


export default function Header() {
  const{setToggleModal, count}=useOrder()
  return (
    <header className="main-header">
      <nav className="main-nav">


        <div className="menu"> 
        <input type="checkbox" id="check" />
  <label htmlFor="check" className="checkbtn">
    <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars"/> 
  </label>
        <ul> 
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Principal</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/contact'>Contacto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/login'>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/admin-product'>Admin Product</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to='/admin-user'>admin user</NavLink>
        </li>
          <li>
            <NavLink className="nav-link " to='/acerca'>Creador</NavLink>
          </li>
        </ul>
        </div>
              <div className="usuario">
                <div className="order">
                  <div className="order-count">
                    {count}
                  </div>
                  <FontAwesomeIcon icon={faCartShopping} className="fa-solid fa-cart-shopping"
                  onClick={()=>setToggleModal(estado=>!estado)}/>
                </div>

    <p>Tu</p>
      <i className="fa-solid fa-user" /> 
      <FontAwesomeIcon icon={faUser}/>
</div>

      </nav>

    </header>
  )
}


    {/* <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fa-solid fa-bars"></i>
    </label> */}
    

{/* <div class="usuario">
    <i class="fa-solid fa-cart-shopping"></i>
    <p>Tu</p>
    <i class="fa-solid fa-user"></i>
     */}
    

