import { useState, useContext } from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import CartModal from "./CartModal";
import { StoreContext } from "../store"
import carticon from "../images/cart.png"
export default function CartSummary() {

  const { state: { cartItems } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;

  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
        <img src={carticon} className="cartIcon" />
        </Badge>
       
      </nav>
      <CartModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
}
