import Link from "next/link";
import { ReactNode } from "react";

interface ReadMoreProps {
  to: string;
  title: string;
}

export function ReadMore({ to, title }: ReadMoreProps): JSX.Element {
  return (
    <div className="mt-5 text-sm">
      <Link href={to}>
        <a href={to} className="font-medium text-c8 hover:text-c6">
          {title} <span aria-hidden="true">&rarr;</span>
        </a>
      </Link>
    </div>
  );
}

interface MoreLinkProps {
  to: string;
  title: string;
}

export function MoreLink({ to, title }: MoreLinkProps): JSX.Element {
  return (
    <li className="text-base truncate">
      <Link href={to} passHref>
        <a href={to} className="font-medium text-gray-900 hover:text-gray-700">
          {title}
        </a>
      </Link>
    </li>
  );
}

interface MoreProps {
  title: string;
  children: ReactNode;
  readMoreLink: string;
  readMoreTitle: string;
}

export function More({ title, readMoreLink, readMoreTitle, children }: MoreProps): JSX.Element {
  return (
    <>
      <div>
        <h3 className="text-sm tracking-wide font-medium text-c6 uppercase">{title}</h3>
        <ul className="mt-4 space-y-4">{children}</ul>
      </div>
      <ReadMore title={readMoreTitle} to={readMoreLink} />
    </>
  );
}
