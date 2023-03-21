import React from "react";
import './HeaderPart.css';
import logo from './instagram_profile_image.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaPlane } from "react-icons/fa";

export default function HeaderPart(){
    const refreshPage = () => {
        window.location.reload();
     }
   
    return (
        <header className ="header-section">

                    <h1 className = "header-text" onClick = {refreshPage}>CHESS TRAVELLING</h1>

                <Tippy content = "Book with us and book it out of here!">
                    <img src={logo} 
                        onClick = {refreshPage}
                        className = "logo"
                        alt = "logo" 
                        width = "200" 
                        height = "auto"
                    />
                </Tippy>
        </header>
    );
}

