import Link from 'next/link'
import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Navbar = ({ theme, setTheme }) => {
  return (
    <>
      <nav className="shadow-md bg-white z-10 w-full sm:fixed sm:top-0 dark:bg-dark px-4 flex justify-between mt-3 mb-5">
        <div className="flex items-center">
          {/* TODO: Logo */}
          <Link href="/">
            <h1 className="capitalize font-bold text-sm bg-[#e5e5e5] py-1 px-2 rounded-md text-[#003049] md:text-xl ">
              stephens multimedia
            </h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-5 capitalize text-sm py-5 lg:gap-10  md:text-xl">
            <Link href="/">
              <li className="">home</li>
            </Link>

            <Link href="/about">
              <li className="">about</li>
            </Link>

            {/* <Link href="/contact">
              <li className="">contact</li>
            </Link> */}

            <Link href="/gallary">
              <li className="">gallery</li>
            </Link>

            <Link href="/booking">
              <li className="">booking</li>
            </Link>
          </ul>
        </div>

        {/* dark mode */}
        <div className="flex ">
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            {theme === 'dark' ? (
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </label>
        </div>

        {/* sidebar */}
        <div className="md:hidden z-10">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" drawer-button">
                <IoIosMenu size={30} />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <div className=""></div>
              <ul className="menu p-4 w-80 min-h-full capitalize bg-base-200 text-base-content gap-5 pt-10 space-y-5 text-center">
                {/* Sidebar content here */}
                <Link href="/">
                  <li className="">home</li>
                </Link>

                <Link href="/about">
                  <li className="">about</li>
                </Link>

                {/* <Link href="/contact">
              <li className="">contact</li>
            </Link> */}

                <Link href="/gallary">
                  <li className="">gallery</li>
                </Link>

                <Link href="/booking">
                  <li className="">booking</li>
                </Link>

                <div className="divider" />

                <div className="">
                  <div className="mt-[20rem]">
                    <h1 className=" uppercase font-bold bg-base-content text-white py-2 px-2 rounded">
                      let`s connect
                    </h1>
                  </div>
                  <div className="mt-5 flex justify-center gap-10">
                    <Link href="" className="hover:tooltip" data-tip="Facebook">
                      <FaFacebook size={30} />
                    </Link>

                    <Link
                      href=""
                      className="hover:tooltip"
                      data-tip="Instagram"
                    >
                      <FaInstagram size={30} />
                    </Link>

                    <Link href="" className="hover:tooltip" data-tip="Tiktok">
                      <FaTiktok size={30} />
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
