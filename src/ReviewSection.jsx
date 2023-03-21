import React from "react";
import {useState, useEffect} from "react";
import './ReviewSection.css';
import './HotelsCards.css';

export default function ReviewSection(props) {
    const name = props.name;
    const commentary = props.commentary;
    const width = props.width;
    const timeAgo = props.timeAgo
    const icon = props.icon;
    return (
            <div className = "displayFlex textAlign">

                <div className = "content">

                    <div className = "review-cards">

                        <div className = "displayFlex">

                            <h3 className = "marginLeftHeader">{name}</h3>
                            <p className = "timeAgoStyle">{timeAgo}</p>
                            
                        </div>
                        
                        <p className = "fontSizeCommentary">Said: <b>{commentary}</b></p>
                        <p className = "iconStyleReview">{icon}</p>
                    </div>

                </div>

            </div>

    )
}