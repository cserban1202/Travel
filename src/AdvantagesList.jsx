import React from 'react';
import Advantages from './advantages.json'; 
import BookingCards from './BookingCards';
import {BiBadgeCheck} from "react-icons/bi";

function AdvantagesList(props){
    const title = props.title;
    const advantages = props.advantages;
    const icon = props.icon;

    return(
        <>
        {
            Advantages.map((advantage) => 
            {
                return (
                    <div  classname = "displayFlex" key = {advantage.title}>
                        <BookingCards
                        title = {advantage.title}
                        advantages = {advantage.description}
                        icon ={<BiBadgeCheck></BiBadgeCheck>}
                        />
                    </div>
                );

            })
        }
        </>
    )
}






export default AdvantagesList