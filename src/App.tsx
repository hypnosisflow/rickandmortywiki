import { useContext } from "react";
import { SettingsContext } from "@/state/settings-context";

import { GridView } from "@/components/grid-view/grid-view";
import { TableView } from "@/components/table-view/table-view";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header/header";

import { ArrowUp, Link } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const view = {
  table: <TableView />,
  grid: <GridView />,
};

const App = () => {
  const { layout } = useContext(SettingsContext);

  const handleScrollTop = () => scrollTo(0, 0);

  const Layout = () => {
    return (
      <main className="container py-2  relative">
        {view[layout as "table" | "grid"]}
      </main>
    );
  };

  return (
    <>
      <Header />
      <Layout />
      <Button
        className="fixed right-10 bottom-20 rounded-full w-10 h-10"
        size={"sm"}
        onClick={handleScrollTop}
      >
        <ArrowUp />
      </Button>

      <div className="h-40 bg-slate-50 mt-10 flex justify-center flex-col items-center">
        <a
          href="https://github.com/hypnosisflow/rickandmortywiki"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span>Source code</span>
          <GitHubLogoIcon />
        </a>
        <p className="text-center text-slate-300 text-xs">
          hypnosisflow @ 2024
        </p>
      </div>
    </>
  );
};

export default App;
