import { useContext,useState} from "react";
import { Row, Col } from "antd";
import { Select,Radio} from 'antd';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { Link } from "react-router-dom";
import theme from "../images/theme.png";
import base from "../images/base.png";
import {addMaterial,removeMaterial,changeSauce}from"../actions";
import { getJSON } from "../api";
import gsap from "gsap"
const { Option } = Select;


function MatList({to}) {

    const matli_gray="matli_gray"
    const matli_orange="matli_orange"
   const { state: {selfpizzas:{ sauce,selfpizza} }, dispatch } = useContext(StoreContext);
let content=getJSON(to)
console.log(content[0].content)

const [value, setValue] = useState(1);
const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    changeSauce(dispatch,e.target.value);
  };
// const bb = () => {
   
//   dispatch({
//     type: CHANGE_IMAGE,
//     payload:  "/images/basil_1.png",
//   });
 
// };
   return (
     <div className="MatListCont">
     <div className="matli_all">
     <div className="MatLi">
   <div className="matli_sq1"></div>
   <div className="matli_sq2"></div>
<div className="MatLi_c2">
<div className="MatLi_c4">
<div className="mat_name">醬料</div>

</div>
<div className="sauce_select">
<Radio.Group onChange={onChange} value={value}>
      <Radio className="sauce_each"value={1}>紅醬</Radio>
      <Radio className="sauce_each" value={2}>青醬</Radio>
      <Radio className="sauce_each" value={3}>白醬</Radio>
    
    </Radio.Group>
    </div>
</div>

</div>
      {selfpizza.map(mat=>(
<div key={mat.id}className="MatLi">
   <div className="matli_sq1"></div>
   <div className="matli_sq2"></div>
<div className="MatLi_c2">
<div className="MatLi_c4">
<div className="mat_name">{mat.Cname}</div>
<div className="eachPrize">單份<span className="eachPriceNum">{mat.price}</span>元</div>
</div>
<div className="MatLi_c5">
<div className="subtract mt_btn" onClick={() =>removeMaterial(dispatch,mat)}>
    <div className="subww"></div>
    </div>
    <div className="matli_lines">
    <div className={`
    ${mat.num>0?matli_orange:matli_gray }
    `  }>
    </div>
    <div className={`
    ${mat.num>1?matli_orange:matli_gray }
    `  }>
    </div>
    </div>
<div className="plus mt_btn" onClick={() =>addMaterial(dispatch,mat)}>
    <div className="subww"></div>
    <div className="plsww"></div>
</div>
</div>
</div>
<div className="MatLi_c3">
    <div className="mat_each_total_p">{
      mat.num<1?null:mat.price*mat.num
}<span>NT</span></div>
  
    </div>
</div>

      )
           )}
     
     </div>  

     </div>
   );
}

export default MatList;