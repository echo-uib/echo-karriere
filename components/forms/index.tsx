import axios from "axios";

import { isDev } from "@/utils";

export * from "./CommiteeApplicationForm";
export * from "./ContactUs";
export * from "./Registration";

interface SubmittedProps {
  title?: string;
  body?: string;
}

export const FormSubmitted = ({
  title = "Takk!",
  body = "Dere hører fra oss så snart som mulig.",
}: SubmittedProps): JSX.Element => (
  <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 h-96 flex flex-col justify-center items-center">
    <div className="relative max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
        <h2>{body}</h2>
      </div>
    </div>
  </div>
);

export const FormError = (): JSX.Element => (
  <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 h-96 flex flex-col justify-center items-center">
    <div className="relative max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Noe gikk galt :(</h1>
        <h2>Prøv igjen senere</h2>
      </div>
    </div>
  </div>
);

export function sendFormSubmission<T>(
  data: T,
  formUrl: string,
  setSubmitted: (val: boolean) => void,
  setError: (val: boolean) => void,
): void {
  if (isDev) {
    if (data instanceof FormData) {
      console.log(JSON.stringify(Object.fromEntries(data), null, 2));
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
    setSubmitted(true);
  } else {
    axios
      .post(formUrl, data, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(res.status === 200);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }
}
