import Image from "next/image";

import aboutUrl from "../assets/about.svg";
import hiringUrl from "../assets/hiring.svg";
import studentsUrl from "../assets/students.svg";
// import { Notification } from "../common/Notification";
import { Hero } from "./Hero";

export function Intro(): JSX.Element {
  return (
    <>
      {/* <Notification message="" url="" /> */}
      <Hero />
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
              Karrieredagen for IT-studenter i Bergen
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              echo karriere er karriereplattformen for IT-studenter i Bergensområdet. Bli kjent med hva vi har å by på.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Om echo karriere</h3>
              <div className="mt-3 text-lg text-gray-500">
                <p>
                  echo karriere er en karrieredag for IT-studenter i og rundt Bergen som ble grunnlagt i 2019. Vårt mål
                  er å bringe studenter i kontakt med bedrifter fra hele Norge, og vise mangfoldet av bedrifter som
                  eksisterer.
                </p>
              </div>

              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Bredde</h4>
                    <p className="mt-2 text-base text-gray-500">
                      echo karriere ønsker å vise mulighetene studentene har når de er ferdig med studiene. Derfor har
                      vi et fokus på å ha bedrifter med forskjellige fagretninger, størrelser og lokasjoner i Norge.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Fokus</h4>
                    <p className="mt-2 text-base text-gray-500">
                      echo karriere er drevet av studenter, for studenter. Vårt mål er å gi IT-studentene i Bergen en
                      fantastisk plattform for jobb etter utdanning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <Image
                className="relative mx-auto"
                height={370}
                width={490}
                src={aboutUrl}
                alt="Four persons standing around with a small dog in front."
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">For studenter</h3>
                <div className="mt-3 text-lg text-gray-500">
                  <p>
                    Lyst til å bli bedre kjent med bedrifter i Norge? echo karriere er en ypperlig måte for deg som
                    student å møte, snakke med og se hva mangfoldet av bedrifter som finnes i Norge. Bli med på
                    foredrag, lynforedrag, workshops og mer!
                  </p>
                </div>

                <div className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Direkte kontakt med bedrifter</h4>
                      <p className="mt-2 text-base text-gray-500">
                        På karrieredagene våre møter du og kan snakke direkte med ansatte i bedriftene som deltar, noe
                        du lurer på? Spør i vei.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">Se hva som skjer</h4>
                      <p className="mt-2 text-base text-gray-500">
                        Delta på presentasjoner og workshops, bli med på lynintervju og konkurranser i løpet av
                        arrangementet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <Image
                  className="relative mx-auto"
                  height={350}
                  width={490}
                  src={studentsUrl}
                  alt="A graduation cap."
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">For bedrifter</h3>
              <div className="mt-3 text-lg text-gray-500">
                <p>
                  echo karriere er en flott plattform for deres bedrift å komme i kontakt med studenter og vise frem hva
                  som gjør dere til en fantastisk arbeidsplass. Arranger workshops for å lære bort noe dere brenner for,
                  ha en presentasjon om deres spesialiteter og mer!
                </p>
              </div>

              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Vis frem deres bedrift</h4>
                    <p className="mt-2 text-base text-gray-500">
                      På karrieredagen er det muligheter for konseptpresentasjoner og workshops som er en flott måte å
                      vise frem kompetansen deres og hva som gjør at dere skiller dere ut.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Møt engasjerte studenter</h4>
                    <p className="mt-2 text-base text-gray-500">
                      echo karriere er en plattform for alle IT-studenter i Bergen &mdash; UiB så vel som HVL. Dere
                      kommer i direkte kontakt med studenter som studerer IT.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-c6 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Annonser jobber</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Som deltaker av karrieredagen får du muligheten til å reklamere for ledige stillinger direkte på
                      våre nettsider.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <Image
                className="relative mx-auto"
                width={490}
                height={300}
                src={hiringUrl}
                alt="Art showing a person looking at online resumes."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
