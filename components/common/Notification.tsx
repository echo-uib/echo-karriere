import Link from "next/link";

interface Props {
  message: string;
  url: string;
}

export function Notification({ message, url }: Props): JSX.Element {
  return (
    <div className="bg-c1">
      <div className="flex justify-center items-center">
        <div className="m-3">
          <span className="hover:underline">
            <Link href={url}>
              <a href={url} className="text-gray-800 md:text-lg text-xl">
                {message} ➔
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
