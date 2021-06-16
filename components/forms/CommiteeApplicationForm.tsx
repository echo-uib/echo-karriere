import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { FormError, FormSubmitted, sendFormSubmission } from "./index";

type FormData = {
  name: string;
  email: string;
  application: string;
};

yup.setLocale({
  mixed: {
    required: "Du må fylle ut feltet",
  },
  string: {
    email: "Feltet må være en gyldig epost-adresse",
  },
});

const interestSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  application: yup.string().required(),
});

export function CommitteeApplication(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(interestSchema),
  });

  const submitForm = (data: FormData) =>
    sendFormSubmission(
      data,
      "https://formcarry.com/s/Ho75s7HESzsQ",
      setSubmitted,
      setError,
    );

  if (submitted) return <FormSubmitted title="Takk for din søknad!" />;
  if (error) return <FormError />;

  return (
    <div className="py-16 px-4 overflow-hidden sm:bx-6 lg:px-8 lg:py24 lg:max-w-xl">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Bli styremedlem
      </h2>
      <p>Send inn din søknad her, så hører du fra oss så fort som mulig.</p>
      <div className="mt-12">
        <form
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name_id"
            >
              Navn
              {errors.name && (
                <span className="text-red-600 text-sm float-right">
                  {errors.name.message}
                </span>
              )}
            </label>
            <div className="mt-1">
              <input
                type="text"
                {...register("name", { required: true })}
                id="name_id"
                autoComplete="name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email_id"
            >
              Epost
              {errors.email && (
                <span className="text-red-600 text-sm float-right">
                  {errors.email.message}
                </span>
              )}
            </label>
            <div className="mt-1">
              <input
                type="email"
                {...register("email", { required: true })}
                id="email_id"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="application"
            >
              Søknadstekst
              {errors.application && (
                <span className="text-red-600 text-sm float-right">
                  {errors.application.message}
                </span>
              )}
            </label>
            <textarea
              id="application"
              {...register("application", { required: true })}
              rows={4}
              cols={25}
              className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-c8 hover:bg-c7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c6"
              type="submit"
            >
              Send søknad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
