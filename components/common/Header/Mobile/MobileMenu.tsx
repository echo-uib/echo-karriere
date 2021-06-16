import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { navigation } from "@/data";

import { BigMobileLink } from "./BigMobileLink";

interface Props {
  mobileOpen: boolean;
  mobileButtonClicked: () => void;
}

export function MobileMenu({ mobileOpen, mobileButtonClicked }: Props): JSX.Element {
  return (
    <Transition
      as={Fragment}
      show={mobileOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Image className="h-10 w-auto" src="/icon.png" alt="echo karriere logo" width={64} height={64} />
              </div>
              <div className="-mr-2">
                <button
                  onClick={mobileButtonClicked}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  <span className="sr-only">Lukk meny</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navigation.map((item) => {
                  return item.items
                    .filter((child) => child.mainMobile)
                    .map((child) => (
                      <BigMobileLink title={child.title} to={child.to} key={child.to}>
                        {child.children}
                      </BigMobileLink>
                    ));
                })}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navigation.map((item) => {
                return item.items
                  .filter((child) => !child.mainMobile)
                  .map((child) => (
                    <Link href={child.to} key={child.to}>
                      <a href={child.to} className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {child.title}
                      </a>
                    </Link>
                  ));
              })}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
