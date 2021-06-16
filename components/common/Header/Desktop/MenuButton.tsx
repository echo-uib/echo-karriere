import { Menu } from "@headlessui/react";

interface Props {
  title: string;
}

export function MenuButton({ title }: Props): JSX.Element {
  return (
    <Menu.Button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
      <span>{title}</span>
      <svg
        className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Menu.Button>
  );
}
