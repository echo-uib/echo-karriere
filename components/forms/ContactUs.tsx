import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { FormError, FormSubmitted, sendFormSubmission } from "./index";

type FormData = {
  name: string;
  email: string;
  message: string;
};

yup.setLocale({
  mixed: {
    required: "Du må fylle ut dette feltet",
    oneOf: "Du må velge et alternativ",
    notType: "Feltet må være et gyldig nummer",
  },
  string: {
    email: "Feltet må være en gyldig epost-adresse",
  },
  number: {
    integer: "Feltet må være et gyldig nummer",
  },
});

const interestSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export function ContactUs(): JSX.Element {
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
      "https://formcarry.com/s/i4fH6eGjGEzY",
      setSubmitted,
      setError,
    );

  if (submitted) return <FormSubmitted />;
  if (error) return <FormError />;

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Kontakt oss
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Send oss gjerne en melding dersom dere har spørsmål eller vil gjerne
            komme i kontakt.
          </p>
        </div>
        <div className="mt-12">
          <form
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name_id"
                className="block text-sm font-medium text-gray-700"
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
                  id="name_id"
                  autoComplete="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
                  {...register("name", { required: true })}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email_id"
                className="block text-sm font-medium text-gray-700"
              >
                Epost
                {errors.email && (
                  <span className="text-red-600 text-sm float-right">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <input
                type="email"
                id="email_id"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
                {...register("email", { required: true })}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Melding
                {errors.message && (
                  <span className="text-red-600 text-sm float-right">
                    {errors.message.message}
                  </span>
                )}
              </label>
              <textarea
                id="message"
                rows={4}
                cols={25}
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
                {...register("message", { required: true })}
              />
            </div>
            <div className="mt-4 sm:col-span-2">
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-c8 hover:bg-c7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c6"
                type="submit"
              >
                Kontakt oss
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
