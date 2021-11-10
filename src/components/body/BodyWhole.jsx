import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';

const BodyWhole = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-12">
                    <Body/>
                </div>
            </div>
        </div>
    );
};

export default BodyWhole;