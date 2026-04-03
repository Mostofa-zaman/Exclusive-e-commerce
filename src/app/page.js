import Image from "next/image";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
  <h1>
    <Header/>
    <Navbar/>
    <Footer/>
  </h1>
  );
}
