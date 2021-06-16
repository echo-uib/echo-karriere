import { ChangeEvent, ReactNode } from "react";

import { JobProps, JobType } from "./Job";

export interface FilterBy {
  type?: JobType;
  location?: string;
  company?: string;
}

interface SelectFilter {
  filter: FilterBy;
  setFilter: (filter: FilterBy) => void;
}

interface SelectFilterJobs extends SelectFilter {
  jobs: JobProps[];
}

interface SelectProps {
  label: string;
  title: string;
  children: ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelect = ({
  label,
  title,
  children,
  onChange,
}: SelectProps): JSX.Element => (
  <div className="md:mb-2 max-w-sm">
    <label htmlFor={label} className="block text-sm font-medium text-gray-700">
      {title}
    </label>
    <select
      id={label}
      name="type"
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      onBlur={onChange}
    >
      {children}
    </select>
  </div>
);

export const JobCompanySelect = ({
  jobs,
  filter,
  setFilter,
}: SelectFilterJobs): JSX.Element => {
  const companies = [...new Set(jobs.map((j) => j.company))].sort();
  const company = (company: string): Partial<FilterBy> => {
    return { company: company === "all" ? undefined : company };
  };
  return (
    <FilterSelect
      title="Selskap"
      label="selskap"
      onChange={(e) => setFilter({ ...filter, ...company(e.target.value) })}
    >
      <option value="all">Alle</option>
      {companies.map((com) => (
        <option key={com}>{com}</option>
      ))}
    </FilterSelect>
  );
};

export const JobLocationSelect = ({
  jobs,
  filter,
  setFilter,
}: SelectFilterJobs): JSX.Element => {
  const locations = [...new Set(jobs.map((j) => j.location))]
    .filter((e) => e)
    .sort();
  const location = (location: string): Partial<FilterBy> => {
    return { location: location === "all" ? undefined : location };
  };
  return (
    <FilterSelect
      title="Sted"
      label="location"
      onChange={(e) => setFilter({ ...filter, ...location(e.target.value) })}
    >
      <option value="all">Alle</option>
      {locations.map((loc) => (
        <option key={loc}>{loc}</option>
      ))}
    </FilterSelect>
  );
};

export const JobTypeSelect = ({
  filter,
  setFilter,
}: SelectFilter): JSX.Element => {
  const type = (type: string): Partial<FilterBy> => {
    return { type: type === "all" ? undefined : (type as JobType) };
  };
  return (
    <FilterSelect
      title="Jobbtype"
      label="type"
      onChange={(e) => setFilter({ ...filter, ...type(e.target.value) })}
    >
      <option value="all">Alle</option>
      <option value="full">Fulltid</option>
      <option value="part">Deltid</option>
      <option value="summer">Sommerjobb</option>
    </FilterSelect>
  );
};

export const Selects = (props: SelectFilterJobs): JSX.Element => (
  <div className="w-full md:w-72">
    <h2 className="mb-2">Sorter</h2>
    <JobTypeSelect {...props} />
    <JobLocationSelect {...props} />
    <JobCompanySelect {...props} />
  </div>
);
