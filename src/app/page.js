import Image from "next/image";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/home/banner/Index";
import FlashSale from "./components/home/flashSale/Index";
import Category from "./components/home/category/Index";

export default function Home() {
  return (
  <>
    <Header/>
    <Navbar/>
    <Banner/>
    <FlashSale/>
    {/* <Category/>    */}
    <Footer/>
  </>
  );
}
