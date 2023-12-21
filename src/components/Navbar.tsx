import * as React from "react";

import { Disclosure } from "@headlessui/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import CNLogoBnW from "../images/cn-logo-bnw.png";
import { Link } from "gatsby";

const navigation = [
  { name: "HOME", href: "/#", current: true },
  { name: "ABOUT", href: "/#about", current: false },
  { name: "EXPERIENCE", href: "/#experience", current: false },
  { name: "PROJECTS", href: "/#projects", current: false },
  { name: "BLOG", href: "/#blog", current: false },
  { name: "CONTACT", href: "/#contact", current: false },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="fixed w-full z-10 bg-red-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                {/* LOGO */}
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src={CNLogoBnW}
                      alt="Cris Noel Logo"
                    />
                  </Link>
                </div>
                {/* Mobile menu button*/}
                <div className="sm:hidden">
                  <Disclosure.Button className="rounded-md p-2 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaXmark className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-white hover:text-black hover:underline hover:decoration-solid",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
