import { useContext } from "react";
import { SettingsContext } from "@/state/settings-context";

import { Button } from "../ui/button";

export const Header = () => {
  const { handleSwitchLayout } = useContext(SettingsContext);

  return (
    <header className="flex justify-center items-center gap-4 py-2">
      <h1 className="text-2xl font-bold text-center leading-tight">
        'Rick and Morty' WiKi
      </h1>
      <Button
        size={"sm"}
        className="rounded-full bg-orange-500"
        onClick={handleSwitchLayout}
      >
        Switch Layout
      </Button>
    </header>
  );
};
