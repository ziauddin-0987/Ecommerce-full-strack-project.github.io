import React from "react";
import Logo from "./logo.js";

function navBar() {
  return (
    <>
      <div className="h-16 shadow-md ">
        <div className="h-full container  mx-auto flex items-center pa-4 justify-between">
          <div className="logo">
            <Logo w={100} h={60} />
          </div>
          <div className="input">
            <input type="text" />
          </div>
          <div className="items">items</div>
        </div>
      </div>
    </>
  );
}

export default navBar;
