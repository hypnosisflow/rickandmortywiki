import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CharactersGrid, EpisodesGrid, LocationsGrid } from "./";

const GRID_VIEW = [
  {
    name: "Characters",
    component: <CharactersGrid />,
  },
  {
    name: "Locations",
    component: <LocationsGrid />,
  },

  {
    name: "Episodes",
    component: <EpisodesGrid />,
  },
];

export const GridView = () => {
  return (
    <>
      <Tabs defaultValue="Characters">
        <TabsList className="mx-auto flex w-fit">
          {GRID_VIEW.map((table) => (
            <TabsTrigger
              key={table.name}
              value={table.name}
              aria-label={table.name}
            >
              {table.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {GRID_VIEW.map((table) => (
          <TabsContent key={table.name} value={table.name}>
            {table.component}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};
