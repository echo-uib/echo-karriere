import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  to: string;
  children: ReactNode;
}

export const BigMobileLink = ({ title, to, children }: Props): JSX.Element => {
  return (
    <Link href={to}>
      <a href={to} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        {children}
        <span className="ml-3 text-base font-medium text-gray-900">{title}</span>
      </a>
    </Link>
  );
};
