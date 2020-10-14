import PropTypes from "prop-types";
import React from "react";
import Navigator from "../navigator"
import images from "../../constants/images";
// import PhoneButton from "../phone_btn";
// import { Link } from 'gatsby'


function Header({ pageData }) {

  return (
    <header className="overflow-hidden bg-red">
      <div className="container">
        <Navigator />
      </div>
      

      <div className="relative container">
        <div className="relative px-12 md:px-24 pt-16  pb-24 z-50">
          <p className="font-58 text-white z-10 relative">{pageData.title}</p>
          <p className="font-80 text-black font-second relative" style={{ marginTop: -57 }}>{pageData.subTitle}</p>
          <p className="font-32 uppercase mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: pageData.description }} />
          <div>
            {
              pageData.checkItems.map((item, index) =>
                <div className="flex" key={index}>
                  <img className="object-none mr-2" src={images.IC_CHECKBOX} />
                  <span className="text-white font-27 my-auto">{item}</span>
                </div>
              )
            }
          </div>
        </div>

        <div className="relative z-0 pt-10">
          <img src={pageData.bgImg} className="absolute object-fill bottom-0 right-0" />
        </div>
      </div>

      <div className="bg-white">
        <p className="bg-black py-3 text-center text-white font-34">{pageData.sentence}</p>
        <img src={images.IC_TRIANGLE} className="mx-auto" />
      </div>

    </header >
  );
}

Header.propTypes = {
  pageData: PropTypes.object,
};


export default Header;
