import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  ADD_CART_ITEM1,
  ADD_CART_ITEM2,
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEM1,
  REMOVE_CART_ITEM2,
  SET_PRODUCT_DETAIL,
  ADD_MATERIAL,
  REMOVE_MATERIAL,
  CHANGE_SAUCE
} from "../utils/constants";

import products from "../json/products.json";

export const addCartItem = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  };
  dispatch({
    type: ADD_CART_ITEM,
    payload: item,
  });
};
export const addCartItem1 = (dispatch, pi) => {
  const pizza = {
    id: pi.id,
    flavor: pi.flavor,
    material: pi.material,
    price: pi.price,
  };
  dispatch({
    type: ADD_CART_ITEM1,
    payload: pizza,
  });
};
export const addCartItem2 = (dispatch, sauce, selfpizza) => {
 const pizza={
   ...selfpizza,sauce:sauce
 }

  dispatch({
    type: ADD_CART_ITEM2,
    payload: pizza,
  });
};
export const changeSauce=(dispatch,value)=>{
  console.log("33")
if(value==1){
  dispatch({
    type: CHANGE_SAUCE,
    payload: "red",
  });
}else if(value==2){
  dispatch({
    type: CHANGE_SAUCE,
    payload: "green",
  });
}else if(value==3){
  dispatch({
    type: CHANGE_SAUCE,
    payload: "white",
  });
}
}
export const removeCartItem = (dispatch, productId) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};
export const removeCartItem1 = (dispatch, productId) => {
  dispatch({
    type: REMOVE_CART_ITEM1,
    payload: productId,
  });
};

export const removeMaterial = (dispatch,mat) => {
  if(mat.num==2){
    console.log(mat.name)
    const mmatt = {
      id: mat.id,
      name: mat.name,
      Cname:mat.Cname,
      price:mat.price,
      num:1,
      n1Image:mat.n1Image,
      n2Image:mat.n2Image
    };
  
  dispatch({
    type: ADD_MATERIAL,
    payload: mmatt
  });
  }
  if(mat.num==1){
   
    const mmatt = {
      id: mat.id,
      name: mat.name,
      Cname:mat.Cname,
      price:mat.price,
      num:0,
      n1Image:mat.n1Image,
      n2Image:mat.n2Image
    };
  
  dispatch({
    type: ADD_MATERIAL,
    payload: mmatt
  });
  }
 

};

export const addMaterial = (dispatch,mat) => {
  if(mat.num==0){
    console.log(mat.name)
    const mmatt = {
      id: mat.id,
      name: mat.name,
      Cname:mat.Cname,
      price:mat.price,
      num:1,
      n1Image:mat.n1Image,
      n2Image:mat.n2Image
    };
  
  dispatch({
    type: ADD_MATERIAL,
    payload: mmatt
  });
  }
  if(mat.num==1){
   
    const mmatt = {
      id: mat.id,
      name: mat.name,
      Cname:mat.Cname,
      price:mat.price,
      num:2,
      n1Image:mat.n1Image,
      n2Image:mat.n2Image
    };
  
  dispatch({
    type: ADD_MATERIAL,
    payload: mmatt
  });
  }
 

};

export const setProductDetail = (dispatch, productId, qty) => {
  const product = products.find(
    x => x.id === productId
  );
  
  if(qty === 0 && product.countInStock > 0)
      qty = 1;

  dispatch({
    type: SET_PRODUCT_DETAIL,
    payload: {
      product,
      qty,
    }
  })
}

export const pageContentsSet = (dispatch, title, products) => {
  dispatch({
    type: SET_PAGE_CONTENT,
    payload: { title, products },
  });
};

export const activeNavItemSet = (dispatch, activeNavItem) => {
  dispatch({
    type: SET_NAVBAR_ACTIVEITEM,
    payload: activeNavItem,
  });
};
