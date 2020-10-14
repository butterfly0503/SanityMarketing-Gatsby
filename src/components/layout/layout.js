import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children, pageData }) {
  return (
    <div className="flex mx-auto flex-col min-h-screen font-primary bg-white">
      {
        pageData != undefined ? <Header pageData={pageData} /> : ''
      }
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageData: PropTypes.object,
};

export default Layout;
