import React from 'react';
import { Link } from "react-router-dom";
import styles from '../../../assets/style/Navbar.Module.css'
import image1 from '../../../assets/images/flower1.jpeg'
import image2 from '../../../assets/images/flower2.jpeg'
import image3 from '../../../assets/images/flower4.jpeg'
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className={`row pb-4 ${styles.navStyle}`}>
                <div className={`col-lg-6 col-md-12`}>
                    <nav class="navbar navbar-expand-md">
                        <div class="">
                            <button class="navbar-toggler bg-warning text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon "><FaBars/></span>
                            </button>
                            <div class={`collapse navbar-collapse`} id="navbarNav">
                                <div class="navbar-nav">
                                    <Link class={`${styles.nav_link} `} aria-current="page" to="/">Home
                                    </Link>
                                    <Link class={`${styles.nav_link} `} to="/about">About Us</Link>
                                    <Link class={`${styles.nav_link} `} to="/article">Articles</Link>
                                    <Link class={`${styles.nav_link} menu-button4`} to="/photo">Photos
                                        <div className="drpodown-menu">
                                            <Link class={`${styles.drop_down} `} to="/about">Photo1</Link>
                                            <Link class={`${styles.drop_down} `} to="/article">Photo2</Link>
                                            <Link class={`${styles.drop_down}`} to="/photo">Photo3</Link>
                                        </div>
                                    </Link>
                                    <Link class={`${styles.nav_link} `} to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="company_name">
                        <h3>Explorer</h3>
                        <h6 className="slogan">Find your Future</h6>
                    </div>
                </div>
                <div className={`col-lg-6 col-md-12 ${styles.row_style}`}>
                    <div className="d-flex image_gallery justify-content-around">
                        <div className="image_div">
                            <img src={image1} alt="iamge1" />
                        </div>
                        <div className="image_div">
                            <img src={image3} alt="iamge2" />

                        </div>
                        <div className="image_div">
                            <img src={image2} alt="iamge3" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;