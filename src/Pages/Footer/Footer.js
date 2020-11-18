import React from "react";
import "./Footer.css";

const FooterComponent = () => {
    return (
        <div>
            <div className="py-2 text-center footer-style">
                <h4> This portfolio is indeed one of my projects..  </h4>
                <a className='linkToSC' href="https://github.com/Dpavaman/portfolio" target='_blank' rel='noopener noreferrer'>
                    <h5>View Source code of this webpage</h5>
                </a>
            </div>
        </div>
    );
};

export default FooterComponent;