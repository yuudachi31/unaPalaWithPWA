import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { Link } from "react-router-dom";
import theme from "../images/theme.png";
import base from "../images/base.png";
import {addMaterial}from"../actions";
import { getJSON } from "../api";
const { Option } = Select;


function DiyPizza({to}) {
   const { state: {selfpizzas:{sauce,selfpizza} }, dispatch } = useContext(StoreContext);
let content=getJSON(to)
console.log(content[0].content)
// const bb = () => {
   
//   dispatch({
//     type: CHANGE_IMAGE,
//     payload:  "/images/basil_1.png",
//   });
 
// };
   return (
    
       <div className="diy_cont"> 
       <img className="pizzabase pizzaSet" src={base}/>
       {
         sauce==="red"?<img  className="pizzaSet" src="/images/sauce_red.png"/>
         :sauce==="green"?<img  className="pizzaSet" src="/images/sauce_green.png"/>
         :sauce==="white"?<img  className="pizzaSet" src="/images/sauce_white.png"/>:""
       }
       {selfpizza.map(mat=>{
//          if(mat.num==0){
//            return(
// <div key={mat.id} className="a" onClick={() =>addMaterial(dispatch,mat)}></div>
//            )
//          }
         if(mat.num==1)
         {
         return(
           <img key={mat.id} className="pizzaSet" src={mat.n1Image}/>
         )
        }
         if(mat.num==2)
        {
          return(
            <img key={mat.id} className="pizzaSet" src={mat.n2Image}/>
          )
        }
       })}
       </div>
     
   );
}

export default DiyPizza;