import React from "react";

const Footer = () => {
  return (
    <div className="p-3 bg-black sticky-bottom">
      <footer>
        <p className="text-white text-center">
          {<span>&copy;</span>} All right reserved {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
