import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import CartSummary from "./CartSummary";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";
import NavItem from "./NavItem";
import header_mark from "../images/header_mark.png"

export default function Header({ title }) {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
   
  };

  return (
    <header className="header">
      <Link to="/">
      <img src={header_mark} className="header_mark" />
      </Link>
      <div className="nav_cont">
<NavItem to="/" className="nav-item" activeClassName="nav-item--active">
首頁
</NavItem>
<NavItem to="/menu" className="nav-item"activeClassName="nav-item--active">
菜單訂餐
</NavItem>
<NavItem to="/diy" className="nav-item"activeClassName="nav-item--active">
自訂披薩
</NavItem>
<CartSummary></CartSummary>
</div>
    </header>
  );
}
