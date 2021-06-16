import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data";

import logo from "../../../../public/logo.png";
import { MenuDropdown } from ".";
import { MenuItem } from "./MenuItem";
import { More, MoreLink } from "./More";

interface Props {
  mobileButtonClicked: () => void;
}

interface Edge {
  node: {
    frontmatter: {
      title: string;
      path: string;
    };
  };
}

export function DesktopMenu({ mobileButtonClicked }: Props): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-0">
      <div className="flex justify-between items-center border-b-2 border-gray-100 pt-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/">
            <a>
              <Image className="w-auto" src={logo} alt="echo karriere logo" width={160} height={70} />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={mobileButtonClicked}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Åpne meny</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-10 pl-8">
          {navigation.map((item) => (
            <div key={item.title} className="relative">
              <MenuDropdown title={item.title}>
                <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 md:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <Menu.Items>
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {item.items.map((child) => (
                          <MenuItem
                            title={child.title}
                            to={child.to}
                            description={child.description}
                            key={child.to}
                            Icon={child.Icon}
                          />
                        ))}
                      </div>
                      {item.hasPosts && (
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <More title="Siste nytt" readMoreLink="/nyheter/" readMoreTitle="Les mer">
                            {/* {allMdx.edges.map((edge: Edge) => (
                              <MoreLink
                                title={edge.node.frontmatter.title}
                                to={edge.node.frontmatter.path}
                                key={edge.node.frontmatter.path}
                              />
                            ))} */}
                          </More>
                        </div>
                      )}
                    </Menu.Items>
                  </div>
                </div>
              </MenuDropdown>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
