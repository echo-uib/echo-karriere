import Image from "next/image";
import Link from "next/link";

import hero from "../../content/images/realfagbygget-utside.jpg";

export function Hero(): JSX.Element {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="text-c8 inline">echo karriere</span>
                  <br />
                  <span className="block text-c10 xl:inline">16. og 17. september 2021</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Vi takker for vårens arrangement og ser frem til høsten! Se siste nytt for mer informasjon om
                  påmelding.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/for-bedrifter/pamelding/">
                      <a
                        href="/for-bedrifter/pamelding/"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-c5 hover:bg-c6 md:py-4 md:text-lg md:px-10"
                      >
                        Påmelding
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/om/">
                      <a
                        href="/om/"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-c1 hover:bg-c2 md:py-4 md:text-lg md:px-10"
                      >
                        Om oss
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute sm:inset-y-0 lg:right-0 lg:w-1/2 bottom-0">
          <Image
            src={hero}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt="Image of Realfagsbygget in Bergen"
          />
        </div>
      </div>
    </>
  );
}
