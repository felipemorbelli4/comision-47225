
import CartWidget from "../../common/cartWidget/CartWidget"
import Footer from "../footer/Footer"
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className='containerNavbar'>
        <Link to="/" style={{textDecoration: "none", color: "black"}}>
          <h2>ArgentinaSubacuatica</h2>
        </Link>
        
        <ul className='categorias'>
          <Link to="/">
            <li style={{textDecoration:"none", color:"black"}}>Todos nuestros productos</li>
          </Link>
          <Link to="/category/Buceo Deportivo">
          <li style={{textDecoration:"none", color:"black"}}>Buceo Deportivo</li>
          </Link>
          
          <Link to="/category/Natación">
          <li style={{textDecoration:"none", color:"black"}}>Natación</li>
          </Link>        
            
          <Link to="/category/Pesca">
            <li style={{textDecoration:"none", color:"black"}}>Pesca</li>
          </Link>
           
        </ul>
        <CartWidget />
      </div>
      <Outlet/>
      <Footer/>
    </>
    
  )
}

export default Navbar