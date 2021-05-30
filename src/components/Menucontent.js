import { useContext } from "react";
import marger from "../images/marger.jpg"
import theme_2 from "../images/theme_2.png"
import { StoreContext } from "../store"
import { Row, Col } from "antd";
import PizzaItem from "./PizzaItem"


function Menucontent({pizzas}) {
   

   return (
  
      <div className="menu_container">
          <div className="menu_theme">
              
<img src={marger} className="marger" >
</img>
<img src={theme_2} className="theme_2" />

</div>
<div className="menu_text">
          菜單
      </div>
      <Row gutter={[0, 0]}className="menu_row">
    {pizzas.map(pizza => {return(
        <Col 
        
          key={pizza.id} 
          xs={{ span:24}}
          lg={{ span: 12 }} 
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
          <PizzaItem pizza={pizza}/>
        </Col>
        )
 } )}
    </Row>
      </div>
 
   );
}

export default Menucontent;