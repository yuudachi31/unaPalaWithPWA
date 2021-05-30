import { useContext } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Menucontent from"../components/Menucontent"
import { StoreContext } from "../store"
import pizzas from "../json/pizzas.json"
const { Header, Content, Footer } = Layout;

function Menu() {
  const { state} = useContext(StoreContext);
  return (
    <Layout className="container">
     <AppHeader></AppHeader>
  <Menucontent pizzas={pizzas}></Menucontent>
    <AppFooter></AppFooter>
    </Layout>
  );
}

export default Menu;