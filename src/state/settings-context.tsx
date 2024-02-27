import { createContext, useState } from "react";

interface SettingsProps {
  layout?: string;
  handleSwitchLayout?: () => void;
}

interface SettingsWrapperProps {
  children: React.ReactNode;
}

export const SettingsContext = createContext<SettingsProps>({});

export const SettingsWrapper = ({ children }: SettingsWrapperProps) => {
  const [layout, setLayout] = useState("table");

  const handleSwitchLayout = () => {
    setLayout(layout === "table" ? "grid" : "table");
  };

  return (
    <SettingsContext.Provider value={{ layout, handleSwitchLayout }}>
      {children}
    </SettingsContext.Provider>
  );
};
