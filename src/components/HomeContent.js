import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"
import { StoreContext } from "../store"
import { Link } from "react-router-dom";
import theme from "../images/theme.png"
import baking from "../images/baking.jpg"
import { getJSON } from "../api";
const { Option } = Select;

function HomeContent({to}) {
   const { state: { productDetail: { product, qty} }, dispatch } = useContext(StoreContext);
let content=getJSON(to)
console.log(content[0].content)
   return (
     <div className="homeContainer">
         <div className="theme_cont">
<img src={theme} className="theme_1"/>
</div>
 <hr className="home_line" />
 <div className="about_cont">
     <div className="about_title">
     {content[0].title}
     </div>
     <div className="about_content">
     {content[0].content}
     </div>

    <div className="readmore_box">
        <p>
        閱讀更多
        </p>
        </div>
        <div className="baking_box">
        <div className="cover2">
      
        <div className="cover">
       
        </div>
        </div>
        <Link to="/menu">
        <div className="gotomenu">
          <p className="gotomenu1">瀏覽菜單 </p><p className="gotomenu2">|</p><p className="gotomenu3">></p>
        </div>
        </Link>
        </div>
 </div>
     </div>
   );
}

export default HomeContent;