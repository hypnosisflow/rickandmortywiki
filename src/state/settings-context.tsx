import { createContext, useEffect, useState } from "react";

interface SettingsProps {
  layout?: string;
  handleSwitchLayout?: () => void;
}

interface SettingsWrapperProps {
  children: React.ReactNode;
}

export const SettingsContext = createContext<SettingsProps>({});

export const SettingsWrapper = ({ children }: SettingsWrapperProps) => {
  const [layout, setLayout] = useState("");

  useEffect(() => {
    const appTheme = localStorage.getItem("appTheme");

    if (appTheme) {
      setLayout(appTheme as "table" | "grid");
    } else {
      setLayout("table");
    }
  }, []);

  const handleSwitchLayout = () => {
    localStorage.setItem("appTheme", layout === "table" ? "grid" : "table");
    setLayout(layout === "table" ? "grid" : "table");
  };

  return (
    <SettingsContext.Provider value={{ layout, handleSwitchLayout }}>
      {children}
    </SettingsContext.Provider>
  );
};
