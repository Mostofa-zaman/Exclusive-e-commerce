import Image from "next/image";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/home/banner/Index";

export default function Home() {
  return (
  <h1>
    <Header/>
    <Navbar/>
    <Banner/>
    <Footer/>
  </h1>
  );
}
