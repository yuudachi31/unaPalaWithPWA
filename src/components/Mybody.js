import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { Link } from "react-router-dom";
import theme from "../images/theme.png";
import base from "../images/base.png";
import {addMaterial,removeMaterial}from"../actions";
import { getJSON } from "../api";
import { ListView } from 'antd-mobile';

const { Option } = Select;


function Mybody({to}) {
   const { state: {selfpizzas:{selfpizza} }, dispatch } = useContext(StoreContext);
let content=getJSON(to)
console.log(content[0].content)
// const bb = () => {
   
//   dispatch({
//     type: CHANGE_IMAGE,
//     payload:  "/images/basil_1.png",
//   });
 
// };
   return (
     <div className="MatListCont">
     <div className="matli_all">
    
      {selfpizza.map(mat=>(
<div key={mat.id}className="MatLi">
<h2>{mat.Cname}</h2>

<div className="plus" onClick={() =>removeMaterial(dispatch,mat)}>-</div>
<div className="plus" onClick={() =>addMaterial(dispatch,mat)}>+</div>
</div>

      )
           )}
     
     </div>  

     </div>
   );
}

export default Mybody;