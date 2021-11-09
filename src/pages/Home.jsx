import React from 'react';
import { Link } from 'react-router-dom';
import BodyWhole from '../components/body/BodyWhole';
import Footer from '../components/Footer';
import Navbar from '../components/header/navbar/Navbar';


const Home = () => {
    return (
        <>
            <Navbar />
            <BodyWhole />
            <Footer />
        </>
    );
};

export default Home;