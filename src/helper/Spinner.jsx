import React from 'react';
import Spinnerlogo from '../assets/images/loadingSpinner.svg'

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img src={Spinnerlogo} alt="Loading..." srcset="" />
        </div>
    )
}

export default Spinner;