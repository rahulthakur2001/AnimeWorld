import React from 'react'
import "./TopItem.scss"
import top1 from "../../../../assets/Images/top1.png"
import top2 from "../../../../assets/Images/top2.png"
import top3 from "../../../../assets/Images/top3.png"
import top4 from "../../../../assets/Images/top4.jpg"
import top5 from "../../../../assets/Images/top5.jpg"
import top6 from "../../../../assets/Images/top6.png"
import top7 from "../../../../assets/Images/top7.png"
import top8 from "../../../../assets/Images/top8.png"

const TopItem = () => {
  return (
    <div>
        <div className="top-items-mIN-CON">
            <div className="top-items">
                <div className="top-item">
                    <img src={top1} alt="" />
                </div>
                <div className="top-item">
                    <img src={top2} alt="" />
                </div>
                <div className="top-item">
                    <img src={top3} alt="" />
                </div>
                <div className="top-item">
                    <img src={top4} alt="" />
                </div>
                <div className="top-item">
                    <img src={top5} alt="" />
                </div>
                <div className="top-item">
                    <img src={top6} alt="" />
                </div>
                <div className="top-item">
                    <img src={top7} alt="" />
                </div>
                <div className="top-item">
                    <img src={top8} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopItem