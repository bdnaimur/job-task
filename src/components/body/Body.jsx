import React from 'react';
import { TiPlusOutline } from 'react-icons/ti'

const Body = () => {
    return (
        <div className="my-5">
            <h3 className="body_head">Features of the CSS Personal/ General Templete</h3>
            <div className="body_content">
                <div ><TiPlusOutline className="body_icon" />Attarctive general or personal website using bright colors</div>
                <div ><TiPlusOutline className="body_icon" />Optimized, fast-loading and w3c certified valid CSS & HTML</div>
                <div ><TiPlusOutline className="body_icon" />Easy-to-edit text Links with easy-to-use Drop-down menus</div>
                <div ><TiPlusOutline className="body_icon" />Tableless layout CSS design. All 11 linked HTML pages included</div>
                <div ><TiPlusOutline className="body_icon" />Cross browser compatible - <span className="colored-text">Tested for IE 5+, Netscape 6+, Opera 7+, Firefox 1.0+</span></div>
                <div ><TiPlusOutline className="body_icon" />Designed to strech and fit all resolutions (800 x 600 and higher)</div>
            </div>
            <div className="ms-4 mt-4"><span className="colored-text">Buy now</span> for only $59.95! <a href="">Add to Cart</a></div>
            <div className="ms-4 mt-4">Smart webby offers Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, incidunt. Lorem ipsum dolor sit amet. <a href="">More templetes from Smart Weby.com</a></div>
        </div>
    );
};

export default Body;