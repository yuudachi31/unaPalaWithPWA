import { useContext ,useEffect,useRef} from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { Link } from "react-router-dom";
import theme from "../images/theme.png"
import DiyPizza from "./DiyPizza"
import MatList from "./MatList"
import { getJSON } from "../api";
import { ListView } from 'antd-mobile';
import {gsap}from "gsap";
import {ScrollTrigger}from 'gsap/ScrollTrigger'
import { addCartItem2, setProductDetail } from "../actions";
const { Option } = Select;
gsap.registerPlugin(ScrollTrigger)

  
function DiyContent({to}) {

   const { state: {selfpizzas:{sauce,selfpizza} }, dispatch } = useContext(StoreContext);
let content=getJSON(to)
console.log(content[0].content)
const onClick=(sauce,selfpizza)=>{
   addCartItem2(dispatch,sauce,selfpizza)
}

   const getTotalPrice = () => {
      return (
         selfpizza.reduce((sum, item) => sum + item.price * item.num, 120)
      )
   }

const circle=useRef(null);
useEffect(()=>{
   gsap.to(".diy_left",{
     
      scrollTrigger:{
         trigger:".diy_left",
         pin:true,
         start:"top top",
         end:"+=800",
         
         // markers:true,
      },    
   })
},[]);

   return (
     <div className="diyContainer">
          <div className="slogan_cont">
    <div className="slogan">在這裡<span>你可以客製自己喜歡的披薩!</span></div>
    </div>
    <div className="diy_all">
       <div className="diy_left">
    <DiyPizza></DiyPizza>
    <div className="mat_in_cont">
    <div className="mat_in">已選配置列表</div>
    <div className="list_btn"></div>
    </div>
    <div className="pizza_bottom_cont">
<div className="total_price_c">總額:</div>
<div className="total_price">{getTotalPrice()}<span>NT</span></div>
<div className="diy_addToCard" onClick={()=>onClick(sauce,selfpizza)}>加入訂單</div>
    </div>
    </div>
    <div className="diy_right">
       <MatList></MatList>
    </div>
    <div ref={circle} id="thi"></div>
    </div>
    <div className="block"></div>
     </div>
   );
}

export default DiyContent;