import React from "react";
import myImage from '../../assets/image/cigarlanding.jpg';
import './style.css';

function HomeHero () {


return (
<div className="HomeHero-container">
    <div>
        <img className="hero-image" src={myImage} alt="cigarlanding.jpg" />
    </div>
</div>            
);
};

export default HomeHero;