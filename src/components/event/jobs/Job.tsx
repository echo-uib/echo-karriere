import { FilterBy } from "./Selects";

export type JobType = "full" | "part" | "summer";

export interface JobProps {
  name: string;
  company: string;
  link: string;
  location: string | null;
  type: JobType;
  deadline: string | null;
}

export const jobType = (type: JobType): string => {
  switch (type) {
    case "full":
      return "Fulltid";
    case "part":
      return "Deltid";
    case "summer":
      return "Sommerjobb";
  }
};

export const Job = ({
  name,
  company,
  location,
  type,
  deadline,
  link,
  filters,
}: JobProps & { filters: FilterBy }): JSX.Element => {
  const show = (): boolean => {
    let valid = true;
    if (filters.type) valid = type === filters.type;
    if (filters.company) valid = valid && company === filters.company;
    if (filters.location) valid = valid && location === filters.location;
    return valid;
  };
  return (
    <li className={show() ? "" : "hidden"}>
      <a
        href={link}
        className="block hover:bg-gray-50"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-c6 truncate">{name}</p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-c2 text-c8">
                {jobType(type)}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-c5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {company}
              </p>
              {location && (
                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-c5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {location}
                </p>
              )}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-c5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {deadline ? (
                <p>
                  Frist til
                  <time dateTime="2020-01-07"> {deadline}</time>
                </p>
              ) : (
                <p>Fortløpende</p>
              )}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
