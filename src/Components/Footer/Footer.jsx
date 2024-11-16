import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { PiShootingStarBold } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import payment from "../../assets/Images/payment-method.svg";
import { PiFacebookLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  const about = [
    { title: "Contact Us", link: "/About" },
    { title: "About Us", link: "/About" },
    { title: "Carrers", link: "/About" },
    { title: "Flipkart Stories", link: "/About" },
    { title: "Press", link: "/About" },
    { title: "Corparate Information", link: "/About" },
  ];
  const Companies = [
    { title: "Myntra", link: "/About" },
    { title: "Cleartrip", link: "/About" },
    { title: "Shopsy", link: "/About" },
  ];

  const Help = [
    { title: "Payments", link: "/About" },
    { title: "Shipping", link: "/About" },
    { title: "Cancellation & Returns", link: "/About" },
    { title: "FAQ", link: "/About" },
  ];

  const Consumer = [
    { title: "Cancellation & Returns", link: "/About" },
    { title: "Trems & Uses", link: "/About" },
    { title: "Security", link: "/About" },
    { title: "Privacy", link: "/About" },
    { title: "Sitemap", link: "/About" },
    { title: "Grievance Redressal", link: "/About" },
  ];

  const Mails = [
    { title: "Flipkart Internet Private Limited," },
    { title: "Buildings NSP, Shakurpur &" },
    { title: "Pritampura,Khoat," },
    { title: "Burari,Shiv Chowk" },
    { title: "Dlehi-110034" },
    { title: "New Delhi, India" },
  ];
  const Registered = [
    { title: "Flipkart Internet Private Limited," },
    { title: "Buildings NSP, Shakurpur &" },
    { title: "Pritampura,Khoat," },
    { title: "Burari,Shiv Chowk" },
    { title: "Dlehi-110034" },
    { title: "New Delhi, India" },
    { title: "Telephone : 9560994962 / 9315101006", color: "blue" },
  ];

  const section1 = [
    { title: "About", items: about },
    { title: "Group Companies", items: Companies },
    { title: "Help", items: Help },
    { title: "Consumer Policy", items: Consumer },
  ];

  const section2 = [
    { title: "Mails Us:", items: Mails },
    { title: "Registered Office Address:", items: Registered },
  ];

  const bottomIcons = [
    { name: "Become a Seller", icon: <CiShop /> },
    { name: "Advertise", icon: <PiShootingStarBold /> },
    { name: "Gifts Cards", icon: <GoGift /> },
    { name: "Help Center", icon: <FaRegQuestionCircle /> },
    { name: "2002 - 2024 Flipkart.com", icon: <LuCopyright /> },
  ];

  const socailMedia = [<PiFacebookLogoBold />, <BsTwitterX />, <FiYoutube />];

  return (
    <div>
      <div className="main-footer">
        <div className="footer-container">
          <div className="footer-left">
            {section1.map((section, index) => (
              <div key={index} className="footer-rows">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-mid-line"></div>
          <div className="footer-right">
            {section2.map((section, index) => (
              <div key={index} className="footer-rows">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{ color: item.color || "#a6a6a6" }}
                      className="only-hover-footer"
                    >
                      {item.link ? (
                        <Link to={item.link}>{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="social-box">
              <h3>Social :</h3>
              <div className="social-icons">
                {socailMedia.map((media, index) => (
                  <p key={index}>{media}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom-row">
          {bottomIcons?.map((data) => (
            <div className="footer-icons-botm">
              {data?.icon} <span>{data?.name}</span>
            </div>
          ))}
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
