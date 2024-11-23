import React from 'react';
import crop from './Navbar.module.css';
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { VscHome } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsBox2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { CiGift } from "react-icons/ci"; import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className={crop.boxes}>
      <div className={crop.logo}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" />
      </div>


      <div className={crop.search}>
        <div className={crop.icon}>
          <IoSearchOutline size={25} />
        </div>
        <input type="text" placeholder="Search for Products, Brands and More" />
      </div>


      <div className={crop.dropdown}>
        <button className={crop.dropdownButton}><VscAccount size={20}/> Account <IoIosArrowDown className={crop.dropdownArrow} size={15}/></button>
        <div className={crop.dropdownContent}>
          <div className={crop.dropdownItem}><VscAccount size={18} className={crop.dropdownIcon} /> <p>My Profile</p></div>
          <div className={crop.dropdownItem}><img src="https://cdn.twidpay.com/ap/media/mobile/static/super-coin--logo-gradient.png" alt="" className={crop.dropdownimg} /> <p>SuperCoin Zone</p></div>
          <div className={crop.dropdownItem}><BsBox2 size={18} className={crop.dropdownIcon} /> <p>My Profile</p></div>
          <div className={crop.dropdownItem}><CiHeart size={25} className={crop.dropdownIcon} /> <p>Wishlist</p></div>
          <div className={crop.dropdownItem}><CiShoppingTag size={25} className={crop.dropdownIcon} /> <p>Coupons</p></div>
          <div className={crop.dropdownItem}><CiGift size={25} className={crop.dropdownIcon} /> <p>Gift Card</p></div>
          <div className={crop.dropdownItem}><CiBellOn size={25} className={crop.dropdownIcon} /> <p>Notification</p></div>
          <div className={crop.dropdownItem}><IoIosLogOut size={25} className={crop.dropdownIcon} /> <p>Log Out</p></div>
        </div>
      </div>

      <div className={crop.dropdown}>
        <button className={crop.dropdownButton}><FiShoppingCart size={20} /> Cart</button>
      </div>
      <div className={crop.dropdown}>
        <button className={crop.dropdownButton}><VscHome size={20} /> Become a Seller</button>
      </div>
      <div className={crop.dropdown}>
        <button className={crop.dropdownButton}><BsThreeDotsVertical size={20} /></button>
      </div>
    </div>
  );
};

export default Navbar;
