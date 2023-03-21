import React from 'react'
import Hotels from './hotels.json';
import HotelsCards from './HotelsCards';

function HotelsCardsList(props){
    const name = props.name;
    const stars = props.stars;
    const src = props.src;
    const width = props.width;
    const roomPrice = props.roomPrice;
    const breakfastPrice = props.breakfastPrice;
    return(
        <>
        {
            Hotels.map((hotel) => 
            {
                return (
                    <div  classname = "displayFlex" key = {hotel.name}>
                        <HotelsCards 
                        name = {hotel.name}
                        src ={hotel.featured_image} width = "250" 
                        stars = {hotel.star_rating}
                        roomPrice = {hotel.price_ppn}
                        breakfastPrice = {hotel.breakfast_price}
                        />
                    </div>
                );

            })
        }
        </>
    )
}

export default HotelsCardsList