import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';

const BodyWhole = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    <Body/>
                </div>
            </div>
        </div>
    );
};

export default BodyWhole;