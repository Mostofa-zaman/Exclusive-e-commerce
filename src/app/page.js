
import Banner from "./components/home/banner/Index";
import FlashSale from "./components/home/flashSale/Index";
import Category from "./components/home/category/Index";
import BestSelling from "./components/home/bestSelling/Index";
import ExploreProduct from "./components/home/exploreProduct/Index";
import Experience from "./components/home/experience/Index";
import NewArrival from "./components/home/newArrival/Index";
import CustomerService from "./components/home/coustomerService/Index";
import SignIn from "./components/auth/signin/Index";

export default function Home() {
  return (
  <>
  
    <Banner/>
    <FlashSale/>
    <Category/>   
    <BestSelling/>
    <Experience/>
    <ExploreProduct/>
    <NewArrival/>
    <CustomerService/>
    <SignIn/>
   
  </>
  );
}
