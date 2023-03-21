import React from 'react';
import Review from './reviewData.json';
import ReviewSection from './ReviewSection';
import {BsEmojiHeartEyesFill} from "react-icons/bs";

export default function ReviewSectionList(props) {
    const name = props.name;
    const commentary = props.commentary;
    const width = props.width;
    const timeAgo = props.timeAgo;
    const icon = props.icon;
    return(
        <>
        {
            Review.map((review) => 
            {
                return (
                    <div key = {review.name}>
                        <ReviewSection
                        name = {review.name}
                        timeAgo = {review.time_ago}
                        commentary = {review.commentary}
                        icon = {<BsEmojiHeartEyesFill></BsEmojiHeartEyesFill>}
                        />
                    </div>
                );

            })
        }
        </>
    )
}