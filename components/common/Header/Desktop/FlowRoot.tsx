import NextLink from "next/link";
import { ReactNode } from "react";

interface Link {
  title: string;
  to: string;
  icon: ReactNode;
}

interface Links {
  first: Link;
  second?: Link;
}

interface Props {
  links: Links;
}

export function FlowRoot({ links: { first, second = undefined } }: Props): JSX.Element {
  return (
    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
      <div className="flow-root">
        <NextLink href={first.to}>
          <a
            href={first.to}
            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            {first.icon}
            <span className="ml-3">{first.title}</span>
          </a>
        </NextLink>
      </div>

      {second && (
        <div className="flow-root">
          <NextLink href={second.to}>
            <a
              href={second.to}
              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              {second.icon}
              <span className="ml-3">{second.title}</span>
            </a>
          </NextLink>
        </div>
      )}
    </div>
  );
}
