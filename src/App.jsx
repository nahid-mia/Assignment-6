import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import BannerExtra from './Components/Banner/BannerExtra.jsx'
import Products from './Components/MainBox/Products/Products'
import SectionBtn from './Components/MainBox/SectionBtn/SectionBtn'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/MainBox/Cart/Cart'
import GetStarted from './Components/GetStarted/GetStarted.jsx'
import TransparentPricing from './Components/TransparentPricing/TransparentPricing.jsx'
import { ToastContainer } from 'react-toastify'
import FooterExtra from './Components/Footer/FooterExtra.jsx'
import Footer from './Components/Footer/Footer.jsx'

const fetchData = async () => {
  const res = await fetch("./data.json");
  return res.json();
}
const dataPromise = fetchData();

function App() {
  console.log(dataPromise);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [money, setMoney] = useState(0);

  return (
    <>
      <Navbar selectedProducts={selectedProducts}></Navbar>
      <Banner></Banner>
      <BannerExtra></BannerExtra>
      <SectionBtn activeTab={activeTab} setActiveTab={setActiveTab} selectedProducts={selectedProducts}></SectionBtn>
      <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>{activeTab === "products" ? <Products dataPromise={dataPromise} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} money={money} setMoney={setMoney}></Products> : <Cart selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} money={money} setMoney={setMoney}></Cart>}</Suspense>
      <GetStarted></GetStarted>
      <TransparentPricing></TransparentPricing>
      <FooterExtra></FooterExtra>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
