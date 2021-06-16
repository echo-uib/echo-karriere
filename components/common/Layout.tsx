import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
