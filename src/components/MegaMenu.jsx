import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const MegaMenu = ({ isOpen, toggleMenu, children }) => {
  return (
    <>
      <div className="relative">
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="relative text-white flex pr-1"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            {children}
            <svg
              className="my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M7 10L12 15L17 10H7Z" fill="white" fillOpacity="0.8" />
            </svg>
          </button>
        </div>

        {/* Mega menu panel, show/hide based on menu state. */}
        {isOpen && (
          <div
            className="w-full z-10 origin-top-left lg:absolute mt-1 p-2 rounded-md shadow-lg bg-white transition-all transform scale-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Account
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                License
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MegaMenu;
