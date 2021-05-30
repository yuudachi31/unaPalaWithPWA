import { useContext } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import DiyContent from"../components/Diycontent"
import { StoreContext } from "../store"
import pizzas from "../json/pizzas.json"
const { Header, Content, Footer } = Layout;

function Diy() {
  const { state} = useContext(StoreContext);
  return (
    <Layout className="container">
     <AppHeader></AppHeader>
  <DiyContent></DiyContent>
    <AppFooter></AppFooter>
    </Layout>
  );
}

export default Diy;