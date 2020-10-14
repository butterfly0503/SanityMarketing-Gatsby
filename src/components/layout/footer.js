import React from "react";
import images from "../../constants/images";
// import { Link } from 'gatsby'

function Footer() {

    return (
        <footer className="bg-black">
            <div className="container flex justify-between px-4 md:px-12 py-4 md:py-10 font-18">
                <div className="flex flex-col md:flex-row">
                    <span className="text-red">
                        Lola Felicia Ltd. Company Reg No. 12417335
                </span>
                    <span className="text-grey ml-0 md:ml-4">
                        Copyright 2020 © All rights Reserved. Made by <span className="text-white">GATSBOY</span>
                    </span>
                </div>
                <div className="flex my-auto">
                    <img src={images.IC_FACEBOOK} className="object-fill mr-4" />
                    <img src={images.IC_TWITTER} className="object-fill mr-4" />
                    <img src={images.IC_INSTAGRAM} className="object-fill mr-4" />
                    <img src={images.IC_LINKEDIN} className="object-fill mr-4" />
                    <img src={images.IC_YOUTUBE} className="object-fill" />
                </div>
            </div>
        </footer>
    );
}


export default Footer;
