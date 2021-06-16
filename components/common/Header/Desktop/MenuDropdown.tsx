import { Menu, Transition } from "@headlessui/react";
import { ReactNode } from "react";

import { MenuButton } from "./MenuButton";

interface Props {
  title: string;
  children: ReactNode;
}

export function MenuDropdown({ title, children }: Props): JSX.Element {
  return (
    <div>
      <Menu>
        {({ open }: { open: boolean }) => (
          <>
            <MenuButton title={title} />

            <Transition
              show={open}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {children}
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
