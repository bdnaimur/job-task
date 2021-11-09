import React from 'react';
import { FaRegSquare, } from 'react-icons/fa'
import { CgShapeSquare, } from 'react-icons/cg'
const Sidebar = () => {
    return (
        <div className="sideBar_bg p-3">
            <h3 className="text-white ps-3 pt-4">Website Add ons</h3>
            <p className="ps-3">Check out our easy to <br />integrate website add-ons!</p>
            <div >
                <div className="d-flex py-1"><div className="sideBar_logo"></div><div>Smart Survey</div></div>
                <div className="d-flex py-1"><div className="sideBar_logo"></div><div>Smart Multi Poll</div></div>
                <div className="d-flex py-1"><div className="sideBar_logo"></div><div>Smart Poll</div></div>
                <div className="d-flex py-1"><div className="sideBar_logo"></div><div>Smart Guest Book</div></div>
                <div className="d-flex py-1"><div className="sideBar_logo"></div><div>Smart Quote</div></div>


                <div></div>
            </div>
        </div>
    );
};

export default Sidebar;