import { Menu } from "@headlessui/react";
import { useState } from "react";

import { DesktopMenu } from "./Desktop";
import { MobileMenu } from "./Mobile";

export function Header(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileButtonClicked = () => setMobileOpen(!mobileOpen);

  return (
    <div className="relative bg-white z-50">
      <Menu>
        <DesktopMenu mobileButtonClicked={mobileButtonClicked} />
        <MobileMenu
          mobileOpen={mobileOpen}
          mobileButtonClicked={mobileButtonClicked}
        />
      </Menu>
    </div>
  );
}
