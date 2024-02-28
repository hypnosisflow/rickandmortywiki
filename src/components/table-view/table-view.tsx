import { Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader } from "@/components/ui/loader";

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
            <Suspense fallback={<Loader />}>{table.component}</Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
