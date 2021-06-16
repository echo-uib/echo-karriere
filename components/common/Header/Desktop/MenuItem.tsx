import { Menu } from "@headlessui/react";
import Link from "next/link";

export interface MenuItemProps {
  title: string;
  description: string;
  to: string;
  Icon: () => JSX.Element;
}

export function MenuItem({ title, description, to, Icon }: MenuItemProps): JSX.Element {
  return (
    <Menu.Item>
      <Link href={to}>
        <a href={to} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
          <Icon />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </a>
      </Link>
    </Menu.Item>
  );
}
