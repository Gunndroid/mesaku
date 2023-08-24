/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction } from "react";

// Define the prop types for the Header component
interface HeaderProps {
  setCurrentView: Dispatch<SetStateAction<string>>;
}
export default function Header({ setCurrentView }: HeaderProps) {
  return (
    <div>
      <header className="bg-white p-4">
        <div className="mx-auto  sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 w-16">
              <button className="block text-mesaku-main">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=166,fit=crop,q=95/YD0809eXrXFNB68B/smalllogowhite-YyvXvBLz7lh3eZ9q.png"
                  alt="sushi image"
                  onClick={() => setCurrentView("home")}
                ></img>
              </button>
            </div>

            <div className="">
              <nav aria-label="Global">
                <div className="flex items-center gap-6 text-sm">
                  {" "}
                  <button onClick={() => setCurrentView("home")}>Home</button>
                  <button onClick={() => setCurrentView("menu")}>Menu</button>
                  <button onClick={() => setCurrentView("story")}>Story</button>
                  <button onClick={() => setCurrentView("gallery")}>
                    Gallery
                  </button>
                  <button
                    className=" rounded border border-m-black bg-m-red p-2  text-md font-medium text-white hover:bg-white hover:text-m-red focus:outline-none hover:border-m-red"
                    onClick={() => setCurrentView("order")}
                  >
                    Order Now
                  </button>
                </div>
              </nav>
            </div>

            {/* <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-mesaku-main px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-mesbg-mesaku-main"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}
