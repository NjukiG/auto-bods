import React from "react";
import "./Header.css"

export default function Header(){
    return(
        <div className="navbar">
            <span className="nav-logo">AutoBods Gym</span>
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/members">Add Member</a>
                <a href="/packages">Packages</a>
                <a href="/add">Add Trainer</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

