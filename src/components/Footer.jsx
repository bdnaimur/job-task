import React from 'react';
import styles from '../assets/style/Footer.Module.css'
const Footer = () => {
    return (
        <div className={`text-white ${styles.footer}`}>
            Copyright @ {new Date().getFullYear()} www.naimur.com.bd - All rights reserved
        </div>
    );
};

export default Footer;