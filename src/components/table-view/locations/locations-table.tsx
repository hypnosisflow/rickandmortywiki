import { Info } from "lucide-react";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useLocations } from "@/state/useCharacter";
import { LocationProps } from "@/models";

export function LocationsTable({
  setSelectedItem,
}: {
  setSelectedItem: (item: LocationProps) => void;
}) {
  const { data: locations } = useLocations();
  const columnsLocos = ["Name", "Type", "Dimension", "Created"];

  return (
    <>
      <TableCaption>
        A list of characters {locations?.results.length}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {columnsLocos.map((i) => (
            <TableHead>{i}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {locations?.results.map((loco: LocationProps) => (
          <TableRow key={loco.id}>
            <TableCell className="font-medium flex gap-2 items-center">
              {loco.name}

              <DialogTrigger asChild>
                <TableCell className="flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedItem(loco)}
                    variant="ghost"
                    size="icon"
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </TableCell>
              </DialogTrigger>
            </TableCell>

            <TableCell>{loco.type}</TableCell>
            <TableCell>{loco.dimension}</TableCell>
            <TableCell>{loco.created}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Button className="mx-auto">Click me</Button>
    </>
  );
}
