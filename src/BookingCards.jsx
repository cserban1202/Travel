import React from 'react'
import './BookingCards.css';


export default function BookingCards(props) {
    const title = props.title;
    const advantages = props.advantages;
    const icon = props.icon;
    return(
        <div className = "container-booking-cards">
            <div className = "bookingCard">
                <h4 className = "style">{title}</h4>
                <p className = "style"><b>Advantage</b>: {advantages}</p>
                <p className = "stylingIcon">{icon}</p> 
            </div>
        </div>
    );
}