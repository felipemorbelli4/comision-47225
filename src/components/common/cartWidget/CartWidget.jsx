import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import "./CartWidget.css"
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="carrito">
        <Badge badgeContent = {0} showZero color="primary">
          <ShoppingCartIcon color="action"></ShoppingCartIcon>
        </Badge>
      </div>
    </Link>
  
  ) ;
};

export default CartWidget