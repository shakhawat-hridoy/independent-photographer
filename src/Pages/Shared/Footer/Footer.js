import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-3 bg-black bottom">
        <p className="text-white text-center">
          {<span>&copy;</span>} All right reserved {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
