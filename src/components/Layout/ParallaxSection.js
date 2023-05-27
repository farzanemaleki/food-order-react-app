import React from 'react';

import bgImage from '../../images/bg/21.jpg';

const ParallexSection = () =>{
    return(
        <section className="parallax-section header-section">
            <div className="bg bg-parallax" data-top-bottom="transform: translateY(300px);" style={{backgroundImage: `url(${bgImage})`}} data-bottom-top="transform: translateY(-300px);"></div>
            <div className="overlay"></div>
            <div className="container">
                <h2>Our shop</h2>
                <h3>Order online is easy</h3>
            </div>
        </section>
    )
}

export default ParallexSection;