import { Modal, Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import { CartIcon } from "./Icons";
import { addCartItem, removeCartItem,removeCartItem1, setProductDetail } from "../actions";
const { Option } = Select;

export default function CartModal({ isModalVisible, toggleModal }) {
   const { state: { cartItems ,cartItems1,cartItems2}, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
   //    return (cartItems1.length > 0) ?
   //       cartItems1.reduce((sum, item) => sum + item.price * item.qty, 0)
   //       : 0;
    }

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])
   

   return (
      <Modal
         title="Shopping Bag"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
      >{cartItems2.length === 0 ? (
         <div></div>
      ) : (
         cartItems2.map(item => {
         const sauce=item["sauce"];
      
        
         

         }))
      }
         {cartItems1.length === 0 ? (
            <div>Cart is empty</div>
         ) : (
            cartItems1.map(item => (
               <li key={item.id} className="cart-item">
                  
                     <div className="cart-image" onClick={()=>{
                       
                        handleCancel();
                     }}>
                        ${item.flavor }
                     </div>
               
                 
                  <div className="cart-item-end">
                     <div className="cart-price">
                        ${item.price }
                     </div>
                     <div className="cart-item-delete" onClick={() => removeCartItem1(dispatch, item.id)}>
                        x
                     </div>
                  </div>

               </li>
            ))
         )}
         <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
         </div>
         <Button
            className="cart-modal-btn"
            type="primary"
         >
            <CartIcon size={20} />
            <span style={{ marginLeft: 12 }}>Start Checkout</span>
         </Button>
      </Modal>
   );
}