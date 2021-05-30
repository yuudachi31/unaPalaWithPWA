import { useContext } from "react";
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { StoreContext } from "../store"
import HomeContent from "../components/HomeContent"
const { Header, Content, Footer } = Layout;

function Home() {
  const { state } = useContext(StoreContext);
  return (
    <Layout className="container">
     <AppHeader></AppHeader>
    <HomeContent to="/"></HomeContent>
    <AppFooter></AppFooter>
    </Layout>
  );
}

export default Home;
