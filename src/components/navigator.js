//import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from "../constants/images";

function Navigator() {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <Location>
            {({ location }) => {    

                const lastPos = location.pathname.lastIndexOf('/');
                const len = location.pathname.length;
                const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

                return (
                    <div className="flex flex-wrap w-full justify-between pl-8 pr-8 md:pr-12 py-4 z-30">
                        <Link to="/" className="my-auto">
                            <img src={images.IC_APP} className="object-fill w-auto" />
                        </Link>

                        <button
                            className="flex my-auto float-right w-12 h-12 items-center p-3 text-white border border-white right-0 rounded md:hidden"
                            onClick={() => toggleExpansion(!isExpanded)}

                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>

                        <nav
                            className={`${
                                isExpanded ? `block` : `hidden`
                                } md:flex md:items-center w-full md:w-auto`}
                        >
                            {[
                                {
                                    route: `/`,
                                    title: `Pay per result pr`,
                                },
                                {
                                    route: `/team`,
                                    title: `Who we are`,
                                },
                                {
                                    route: `/services`,
                                    title: `Our Services`,
                                },
                                {
                                    route: `/casestudy`,
                                    title: `Case Studies`,
                                },
                                {
                                    route: `/blogs`,
                                    title: `Blog`,
                                },
                            ].map((link) => (
                                <Link
                                    className={"block mt-4 uppercase font-24 no-underline text-center md:inline-block md:mt-0 ml-0 md:ml-2 mr-0 md:mr-10"
                                        + (link.route == pathName ? " text-primary" : " text-white")}

                                    key={link.title}
                                    to={link.route}
                                >
                                    {link.title}
                                </Link>
                            ))}
                            <div className="flex justify-center mt-4 md:mt-0">
                                <button className="button-green px-8">Let&apos;s begin</button>
                            </div>

                        </nav>


                    </div>
                );
            }}
        </Location>
    );
}



export default Navigator;