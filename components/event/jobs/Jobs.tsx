import { useEffect, useState } from "react";

import { shuffleArray } from "../../../utils";
import { FilterBy, Job, JobProps } from ".";
import { Selects } from "./Selects";

export const Jobs = (): JSX.Element => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [filter, setFilter] = useState<FilterBy>({
    type: undefined,
    location: undefined,
    company: undefined,
  });

  useEffect(() => {
    shuffleArray(jobs);
    setJobs(jobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-8 xl:py-10 max-w-3xl lg:max-w-5xl xl:grid xl:grid-cols-3">
      <div className="xl:col-span-2 xl:border-r xl:border-gray-200">
        <div>
          <aside className="my-8 flex flex-col items-center justify-center xl:hidden">
            <Selects jobs={jobs} filter={filter} setFilter={setFilter} />
          </aside>
          <div className="bg-white shadow overflow-hidden sm:rounded-md md:mr-8">
            <ul className="divide-y divide-gray-200">
              {jobs.map((node) => (
                <Job
                  key={node.link}
                  name={node.name}
                  company={node.company}
                  location={node.location}
                  type={node.type}
                  deadline={node.deadline}
                  link={node.link}
                  filters={filter}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <aside className="hidden xl:block xl:pl-8">
        <Selects jobs={jobs} filter={filter} setFilter={setFilter} />
      </aside>
    </div>
  );
};
