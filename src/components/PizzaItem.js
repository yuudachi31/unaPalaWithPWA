import { Card } from "antd"
import { Link } from 'react-router-dom';
import { addCartItem1 } from "../actions";
import { useContext,useState} from "react";
import { StoreContext } from "../store"
export default function PizzaItem({ pizza }) {
    const { state: {selfpizzas:{sauce,selfpizza} }, dispatch } = useContext(StoreContext);
    const onClick=(pi)=>{
        addCartItem1(dispatch,pi)
    }
    return (
        <div className="pizzaCard">
            <div className="sq_left "></div>
            <div className="sq_bottom "></div>
          
            <div className="menu_addToCard " onClick={()=>onClick(pizza)}>加入訂單</div>
            {/* <Link to={`/product/${product.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={product.image}
                    alt={product.name} />
            </Link> */}
            <div className="pizzaCard_in">
                <div className="pizzaCard_dsp">
                <h2 className="pizza_flavor">
                    {pizza.flavor}
                </h2>
                <p className="">
                    {pizza.material}
                </p>
                </div>
                <div className="pizzaPrice">
                   
                  <span className="number">
                      {pizza.price} 
                      </span>
                      <span className="NT">
                          NT
                      </span>
                </div>
                
            </div>
        </div>
    );
}
