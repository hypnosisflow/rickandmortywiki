import { Info } from "lucide-react";
import { useState } from "react";
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
import { useCharacters } from "@/state/useCharacter";
import { CharacterProps } from "@/models";

export function CharactersTable({
  setSelectedItem,
}: {
  setSelectedItem: (item: CharacterProps) => void;
}) {
  const [nextPage] = useState(0);

  const { data: characters } = useCharacters(nextPage);

  const columnsChars = [
    "Name",
    "Status",
    "Species",
    "Gender",
    "Created",
    "URL",
  ];

  return (
    <>
      <TableCaption>
        A list of characters {characters?.results.length}
      </TableCaption>
      <TableHeader className="">
        <TableRow>
          {columnsChars.map((i) => (
            <TableHead>{i}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {characters?.results.map((char: CharacterProps) => (
          <TableRow key={char.id}>
            <TableCell className="font-medium flex gap-2 items-center">
              <picture>
                <img
                  src={char.image}
                  alt="char avatar"
                  className="w-10 h-10 rounded-full"
                />
              </picture>
              {char.name}

              <DialogTrigger asChild>
                <TableCell className="flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedItem(char)}
                    variant="ghost"
                    size="icon"
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </TableCell>
              </DialogTrigger>
            </TableCell>

            <TableCell>{char.status}</TableCell>
            <TableCell>{char.species}</TableCell>
            <TableCell>{char.gender}</TableCell>
            <TableCell>{char.created}</TableCell>
            <TableCell>{char.url}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Button size="sm">Click me</Button>
    </>
  );
}
