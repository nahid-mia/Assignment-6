import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import BannerExtra from './Components/Banner/BannerExtra.jsx'
import Products from './Components/MainBox/Products/Products'
import SectionBtn from './Components/MainBox/SectionBtn/SectionBtn'
import Navbar from './Components/Navbar/Navbar'
import { DiVim } from 'react-icons/di'
import Cart from './Components/MainBox/Cart/Cart'
import GetStarted from './Components/GetStarted/GetStarted.jsx'
import TransparentPricing from './Components/TransparentPricing/TransparentPricing.jsx'

const fetchData = async() => {
  const res = await fetch("data.json");
  return res.json();
}

function App() {

  const dataPromise = fetchData();

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <>
      <Navbar selectedProducts={selectedProducts}></Navbar>
      <Banner></Banner>
      <BannerExtra></BannerExtra>
      <SectionBtn activeTab={activeTab} setActiveTab={setActiveTab} selectedProducts={selectedProducts}></SectionBtn>
      <Suspense fallback={<div>data is loading</div>}>{activeTab === "products"? <Products dataPromise={dataPromise} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></Products>: <Cart selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></Cart>}</Suspense>
      <GetStarted></GetStarted>
      <TransparentPricing></TransparentPricing>
      
    </>
  )
}

export default App
