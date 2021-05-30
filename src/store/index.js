import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import products from "../json/products.json";
import selfpizza from "../json/selfPizza.json"
import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  ADD_CART_ITEM1,
  ADD_CART_ITEM2,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  CHANGE_IMAGE,
  ADD_MATERIAL,
  REMOVE_MATERIAL,
  CHANGE_SAUCE
} from "../utils/constants";

export const StoreContext = createContext();
let cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
   
  pizzabase:"/images/beef_1.png"
  ,
   selfpizzas:{
     sauce:"red",
    selfpizza
 },
  navBar: {
    activeItem: "/",
  },
  cartItems,
  cartItems1:[],
  cartItems2:[],
  productDetail: {
    product: {},
    qty: 1,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: action.payload,
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
      case CHANGE_SAUCE:
        return {
          ...state,
          selfpizzas:{
            ...state.selfpizzas,
            sauce:action.payload,
          } 
        };
    case ADD_MATERIAL:
      const mat = action.payload;
      const spizza = state.selfpizzas.selfpizza.find((x) => x.id === mat.id);
     
      console.log(spizza)
      
        console.log(state.selfpizzas.selfpizza)
        state.selfpizzas.selfpizza= state.selfpizzas.selfpizza.map((x)=>
          x.id === mat.id ?mat: x
          
        // }
        )
        console.log(state.selfpizzas)
        
        case REMOVE_MATERIAL:
      const mat2 = action.payload;
      const spizza2 = state.selfpizzas.selfpizza.find((x) => x.id === mat2.id);
     
      console.log(spizza2)
      
        console.log(state.selfpizzas.selfpizza)
        state.selfpizzas.selfpizza= state.selfpizzas.selfpizza.map((x)=>
          x.id === mat2.id ?mat2: x
          
        // }
        )
        console.log(state.selfpizzas)
        
      
      //  const selfpizza =state.selfpizzas.selfpizza.map((x) =>
      //     x.id === spizza.id ? mat : x
      //   );
      //   return { ...state.selfpizzas,  selfpizza };
      // }
      // selfpizza = [ ...state.selfpizzas.selfpizza, mat];
      // return {  ...state.selfpizzas,  selfpizza};
    case CHANGE_IMAGE:
      
      return {
      ...state,
      pizzabase:action.payload
      }
    case ADD_CART_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        cartItems = state.cartItems.map((x) =>
          x.id === product.id ? item : x
        );
        return { ...state, cartItems };
      }
      cartItems = [...state.cartItems, item];
      return { ...state, cartItems };
    case ADD_CART_ITEM1:
      const pi = action.payload;

      state.cartItems1 = [...state.cartItems1, pi];
     console.log(state.cartItems1)
     case ADD_CART_ITEM2:
      const pi2 = action.payload;

      state.cartItems2 = [...state.cartItems2, pi2];
      
    //  console.log(state.cartItems2)
    case REMOVE_CART_ITEM:
      cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      return { ...state, cartItems };
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
