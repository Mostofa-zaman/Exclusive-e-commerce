import Image from "next/image";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/home/banner/Index";
import FlashSale from "./components/home/flashSale/Index";
import Category from "./components/home/category/Index";
import BestSelling from "./components/home/bestSelling/Index";
import ExploreProduct from "./components/home/exploreProduct/Index";
import Experience from "./components/home/experience/Index";
import NewArrival from "./components/home/newArrival/Index";
import CustomerService from "./components/home/coustomerService/Index";

export default function Home() {
  return (
  <>
    <Header/>
    <Navbar/>
    <Banner/>
    <FlashSale/>
    <Category/>   
    <BestSelling/>
    <Experience/>
    <ExploreProduct/>
    <NewArrival/>
    <CustomerService/>
    <Footer/>
  </>
  );
}
