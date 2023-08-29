import {data} from "../Data.js"
import "../Styles/card.css"
import React from "react";
import { useState } from "react";


const Cards  =({cardsData})=>{
    const [showCards,setShowCards] = useState(cardsData.slice(0,3));
    
    return(
        <div className="card">
            {showCards.map((card,index)=>(
                <div className="card-cont" key={index}>
                    {card?.id}
                    {card?.cursor}
                    {card?.permeant}
                    {card?.parent_section_no}
                    {card?.card_no}
                    {card?.parent_section}
                    {card?.card_title}
                    {card?.data}
                    {card?.data_type}
                    {card?.data_value}
                    {card?.button}
                    {card?.button_name}
                    {card?.link}
                    {card?.link_name}
                    {card?.redirect}
                    {card?.note}
                    {card?.button}

                </div>
            ))}
        <div className="button">
            <button type="button" onClick={()=>{setShowCards([...cardsData])}}>See More</button>
            </div>
        </div>

    )
}

export default React.memo(Cards);