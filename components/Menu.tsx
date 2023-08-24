/* eslint-disable @next/next/no-img-element */
// components/Menu.tsx
import React from "react";

type MenuProps = {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
};

const Menu: React.FC<MenuProps> = ({ setCurrentView }) => {
  return (
    <div className="flex flex-col justify-center my-10  bg-m-white md:w-1/2 rounded-lg p-4 md:mx-auto mx-4 ">
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1134,h=5752,fit=crop/YD0809eXrXFNB68B/webmenu-1-A8525V9v13CWqnxP.png"
        alt="Menu"
        className=""
      />
      {/* <button
        onClick={() => setCurrentView("order")}
        className="mt-10 rounded border border-m-black bg-m-red px-12 py-3 text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none "
      >
        Call Now!
      </button> */}
      <div className="rounded-md w-full">
        <a
          type="button"
          href="tel:+1234567890"
          className=" mt-4 rounded border text-center w-full border-m-black bg-m-red px-12 py-3 text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none "
        >
          Click to Call Now +224-388-9024
        </a>
      </div>
    </div>
  );
};

export default Menu;
