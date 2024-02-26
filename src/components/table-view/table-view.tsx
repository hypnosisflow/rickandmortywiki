import { Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Characters = lazy(() => import("./characters/characters"));
const Locations = lazy(() => import("./locations/locations"));
const Episodes = lazy(() => import("./episodes/epidodes"));

const TABLES = [
  {
    name: "Characters",
    component: <Characters />,
  },
  {
    name: "Locations",
    component: <Locations />,
  },
  {
    name: "Episodes",
    component: <Episodes />,
  },
];

export function TableView() {
  const Loading = () => <div>Loading...</div>;

  return (
    <>
      <Tabs defaultValue="Characters">
        <TabsList className="mx-auto flex w-fit">
          {TABLES.map((table) => (
            <TabsTrigger key={table.name} value={table.name}>
              {table.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABLES.map((table) => (
          <TabsContent key={table.name} value={table.name}>
            <Suspense fallback={<Loading />}>{table.component}</Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
