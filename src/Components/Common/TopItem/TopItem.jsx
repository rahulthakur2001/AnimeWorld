import React, { useState } from "react";
import "./TopItem.scss";
import top1 from "../../../assets/Images/top1.png";
import top2 from "../../../assets/Images/top2.png";
import top3 from "../../../assets/Images/top3.png";
import web from "../../../assets/Images/webrtc.png";
import top4 from "../../../assets/Images/top4.jpg";
import top5 from "../../../assets/Images/top5.jpg";
import top6 from "../../../assets/Images/top6.png";
import top7 from "../../../assets/Images/top7.png";
import top8 from "../../../assets/Images/top8.png";
import { Link } from "react-router-dom";

const TopItem = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);


  

  const MensTopWear = [
    { name: "Mens Top Wear" },
    { name: "All", link: "" },
    { name: "Mens T-Shirts", link: "" },
    { name: "Mens Casual Shirts", link: "" },
    { name: "Mens Formal Shirts", link: "" },
    { name: "Mens Kurtas", link: "" },
    { name: "Mens Ethnic Sets", link: "" },
  ];
  const MensBottomWear = [
    { name: "Mens Top Wear" },
    { name: "All", link: "" },
    { name: "Mens Jeans", link: "" },
    { name: "Mens Trousers", link: "" },
    { name: "Mens TrackPants", link: "" },
    { name: "Mens Shorts", link: "" },
    { name: "Mens Cargos", link: "" },
  ];
  const Fashion = [
    { Name: "Mens Top Wear", submenu: MensTopWear },
    { Name: "Mens Bottom Wear", submenu: MensBottomWear },
    { Name: "Women Ethnic", submenu: "WomenEthnic" },
    { Name: "Men Footwear", submenu: "MenFootwear" },
    { Name: "Women Footwear", submenu: "WomenFootwear" },
    { Name: "Watches and Accessories", submenu: "Watches" },
    { Name: "Women Western", submenu: "WomenWestern" },
  ];
  const TopProduct = [
    { Product: top1, name: "Grocery", items:Fashion},
    { Product: top2, name: "Moblies", items:Fashion},
    { Product: top3, name: "Fashion", items: Fashion },
    { Product: top4, name: "Electronics", items: "" },
    { Product: top5, name: "Home & Furniture", items: "" },
    { Product: top6, name: "Apllianecs", items: "" },
    { Product: top7, name: "Flight Bookings", items: "" },
    { Product: top8, name: "Beauty, Toys & More", items: "" },
    { Product: top8, name: "Two Wheelers", items: "" },
  ];

  return (
    <div className="top-items-min-con">
      <div className="top-items">

        {TopProduct.map((product) => (
          <div className="top-item" key={product.name} onMouseEnter={()=>setHoveredMenu(product.name)} onMouseLeave={()=>setHoveredMenu(null)}>
            <img src={product.Product} alt="" />
            <p> {product.name}</p>
            {
                product.items ? (
                    hoveredMenu === product.name && (
                        <ul className="menu">
                            {
                                product?.items?.map((menu)=>(
                                    <li key={menu.Name} onMouseEnter={()=>setHoveredSubMenu(menu.Name)} onMouseLeave={()=>setHoveredSubMenu(null)}>{menu.Name}
                                    {
                                        hoveredSubMenu === menu.Name && (
                                            <ul className="submenu">
                                                {
                                                  Array.isArray(menu.submenu) ? (

                                                    menu?.submenu?.map((submenu)=>(
                                                     
                                                      <Link to={submenu.link}>
                                                        <li key={submenu.name}>{submenu.name}</li>
                                                        </Link>
                                                    ))
                                                  ):(
                                                      <li>NO DATA</li>
                                                  )
                                                }
                                            </ul>
                                        )
                                    }
                                    </li>
                                ))
                            }
                           
                        </ul>
                    )

                ):null
            }
          </div>
        ))}

      </div>
    </div>
  );
};

export default TopItem;
