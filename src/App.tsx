import { useContext } from "react";
import { GridView } from "./components/grid-view/grid-view";
import { TableView } from "./components/table-view/table-view";
import { Button } from "./components/ui/button";
import { SettingsContext } from "./state/settings-context";

const view = {
  table: <TableView />,
  grid: <GridView />,
};

function App() {
  const { layout, handleSwitchLayout } = useContext(SettingsContext);

  const handleScrollTop = () => scrollTo(0, 0);

  const Layout = () => view[layout as "table" | "grid"];

  const Header = () => {
    return (
      <header className="flex justify-center items-center gap-4 mb-2">
        <h1 className="text-2xl font-bold text-center leading-tight">
          'Rick and Morty' WiKi
        </h1>
        <Button size={"sm"} onClick={handleSwitchLayout}>
          Switch Layout
        </Button>
      </header>
    );
  };

  return (
    <main className="container py-2  relative">
      <Header />
      <Layout />
      <Button
        className="fixed right-20 bottom-10 rounded-full w-10 h-10"
        size={"sm"}
        onClick={handleScrollTop}
      >
        TOP
      </Button>
    </main>
  );
}

export default App;
