import { ReactNode } from "react";

interface ContainerProps {
  wide?: boolean;
  children: ReactNode;
  style?: string;
}

export function Container({ children }: ContainerProps): JSX.Element {
  return <div className="container px-4 max-w-7xl">{children}</div>;
}
