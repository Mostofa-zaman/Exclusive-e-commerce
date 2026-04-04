import { BsCart2, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import { LiaAngleRightSolid } from "react-icons/lia";

import {
  FaCrown,
  FaSprayCan,
  FaChair,
  FaShoppingCart,
  FaHome,
  FaUtensils,
  FaLaptop,
  FaTshirt,
  FaShoePrints,
  FaClock,
  FaHeadphones,
  FaMotorcycle,
  FaSmileBeam,
  FaMobileAlt,
  FaBasketballBall,
  FaTabletAlt,
  FaCar,
  FaShoppingBag,

  
} from "react-icons/fa";

import { GiDress, GiHighHeel, GiNecklace, GiSunglasses } from "react-icons/gi";
import { MdOutlineWatch } from "react-icons/md";
import { FaStore, FaDollarSign, FaChartLine } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadset } from "react-icons/pi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { RiLinkedinLine } from "react-icons/ri";

import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


export const allIcon = {
  
  navIcon: [
    { id: 1, icon: <FaRegHeart />, to: "/wishlist" },
    { id: 2, icon: <BsCart2 />, to: "/addtocart" },
    { id: 3, icon: <FaRegUser /> },
  ],
  searchIcon: <IoIosSearch />,
  send: <IoMdSend />,
  righiangle:<LiaAngleRightSolid />,
  threedots:<BsThreeDotsVertical />,
  socialLinks: [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
  ],
  google: <FcGoogle />,
  eye: <IoEyeOutline />,
  star: <FaStar />,
  deletes: <RiDeleteBin6Line />,
  cart: <GrCart />,
  categories: [
    { id: 1, name: "Beauty", icon: <FaCrown /> },
    { id: 2, name: "Fragrances", icon: <FaSprayCan /> },
    { id: 3, name: "Furniture", icon: <FaChair /> },
    { id: 4, name: "Groceries", icon: <FaShoppingCart /> },
    { id: 5, name: "Home Decoration", icon: <FaHome /> },
    { id: 6, name: "Kitchen Accessories", icon: <FaUtensils /> },
    { id: 7, name: "Laptops", icon: <FaLaptop /> },
    { id: 8, name: "Mens Shirts", icon: <FaTshirt /> },
    { id: 9, name: "Mens Shoes", icon: <FaShoePrints /> },
    { id: 10, name: "Mens Watches", icon: <MdOutlineWatch /> },
    { id: 11, name: "Mobile Accessories", icon: <FaHeadphones /> },
    { id: 12, name: "Motorcycle", icon: <FaMotorcycle /> },
    { id: 13, name: "Skin Care", icon: <FaSmileBeam /> },
    { id: 14, name: "Smartphones", icon: <FaMobileAlt /> },
    { id: 15, name: "Sports Accessories", icon: <FaBasketballBall /> },
    { id: 16, name: "Sunglasses", icon: <GiSunglasses /> },
    { id: 17, name: "Tablets", icon: <FaTabletAlt /> },
    { id: 18, name: "Tops", icon: <FaTshirt /> },
    { id: 19, name: "Vehicle", icon: <FaCar /> },
    { id: 20, name: "Womens Bags", icon: <FaShoppingBag /> },
    { id: 21, name: "Womens Dresses", icon: <GiDress /> },
    { id: 22, name: "Womens Jewellery", icon: <GiNecklace /> },
    { id: 23, name: "Womens Shoes", icon: <GiHighHeel /> },
    { id: 24, name: "Womens Watches", icon: <FaClock /> },
  ],

  statsData: [
    {
      id: 1,
      value: "10.5k",
      label: "Sellers active on our site",
      icon: <FaStore />,
      highlight: false,
    },
    {
      id: 2,
      value: "33k",
      label: "Monthly Product Sale",
      icon: <FaDollarSign />,
      highlight: true,
    },
    {
      id: 3,
      value: "45.5k",
      label: "Customer active in our site",
      icon: <FaShoppingBag />,
      highlight: false,
    },
    {
      id: 4,
      value: "25k",
      label: "Annual gross sale in our site",
      icon: <FaChartLine />,
      highlight: false,
    },
  ],

  serviceFeatures: [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: <TbTruckDelivery />,
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: <PiHeadset />,
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      icon: <HiOutlineShieldCheck />,
    },
  ],
  teamSocialIcons: [
    { id: 1, icon: <CiTwitter />, href: "https://twitter.com" },
    { id: 2, icon: <CiInstagram />, href: "https://instagram.com" },
    { id: 3, icon: <RiLinkedinLine />, href: "https://linkedin.com" },
  ],
};

export default allIcon;
