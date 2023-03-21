import React from "react";
import './FooterSection.css';
import { FaFacebookMessenger,FaDiscord } from "react-icons/fa";
import Modal from 'react-modal'
import { useState } from "react";



export default function FooterSection() {
    let today = new Date();
    const [modalIsOpen, setModalIsOpen] = useState(false)


    return (
        <div className = "footer-section">
            <footer className = "footer-text">
                
           <p>All rights reserved © <b>{today.getFullYear()}</b></p> 
           <p>Don't hesitate to contact us!</p>

           <FaDiscord className = "marginR10 iconSize iconFooterStyle" 
                onClick = {() => setModalIsOpen(true)}
           />

           <Modal isOpen={modalIsOpen}>
               <p>We will try to get back with you in quickest time possible! Sorry for the inconvenience.</p>
                    <div>
                        <button onClick = {() => setModalIsOpen(false)}>OK!</button>
                     </div>
           </Modal>

           <FaFacebookMessenger className = "iconSize iconFooterStyle"
                onClick = {() => setModalIsOpen(true)}
           />

            <Modal isOpen={modalIsOpen}>
               <p>We will try to get back with you in quickest time possible! Sorry for the inconvenience.</p>
                    <div>
                        <button onClick = {() => setModalIsOpen(false)}>OK!</button>
                    </div>
           </Modal>
            </footer>
        </div>
    );
}