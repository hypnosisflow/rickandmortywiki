import { useContext } from "react";
import { SettingsContext } from "@/state/settings-context";

import { GridView } from "@/components/grid-view/grid-view";
import { TableView } from "@/components/table-view/table-view";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header/header";

import { ArrowUp } from "lucide-react";

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
    </>
  );
};

export default App;
