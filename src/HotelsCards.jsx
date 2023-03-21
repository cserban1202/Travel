import React from "react";
import {useState, useEffect} from "react";
import './HotelsCards.css';
import hotels from './hotels.json';

export default function HotelsCards(props) {
    const [data, setDate] = useState();
    const name = props.name;
    const stars = props.stars;
    const src = props.src;
    const width = props.width;
    const roomPrice = props.roomPrice;
    const breakfastPrice = props.breakfastPrice;
    
    return (
        <div className="containerHotels">
            <div className = "textAlign hotels-card margin2rightbottom">
                <h2 className = "margin2rightbottom padding-top">{name}</h2>
                <img className = "margin2rightBottom" src = {src} width = {width}/>     
                <p className = "textAlign textSize"> <b>{stars}</b>/5 Stars</p>
                <p className = "textAlign textSize"> <b>Room Price</b>: {roomPrice}</p>
                <p className = "textAlign textSize"> <b>Breakfast Price</b>: {breakfastPrice}</p>
            </div>
        </div>
    );
}

/*   */

/*
 { hotels && hotels.map ( hotel => {
                return (
                    <div key = {hotel.name}>
                           <h4>{hotel.name}</h4> 
                           <p>{hotel.star_rating}</p>
                           <p>{hotel.price_ppn}</p>
                           <p>{hotel.breakfast_price}</p>
                    </div>
                )
            })
        }
 */