import { Button } from "@/components/ui/button";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { EpisodeProps, LocationProps } from "@/models";
import { useEpisodes } from "@/state/useCharacter";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Info } from "lucide-react";
import React from "react";

export const EpisodesTable = ({
  setEpisodeSelected,
}: {
  setEpisodeSelected: (episode: EpisodeProps) => void;
}) => {
  const { data: episodes } = useEpisodes();
  const columnsLocos = ["Name", "Air Date", "Episode", "Created"];

  return (
    <>
      <TableCaption>
        A list of characters {episodes?.results.length}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {columnsLocos.map((i) => (
            <TableHead>{i}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {episodes?.results.map((episode: EpisodeProps) => (
          <TableRow key={episode.id}>
            <TableCell className="font-medium flex gap-2 items-center">
              {episode.name}

              <DialogTrigger asChild>
                <TableCell className="flex items-center justify-center">
                  <Button
                    onClick={() => setEpisodeSelected(episode)}
                    variant="ghost"
                    size="icon"
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </TableCell>
              </DialogTrigger>
            </TableCell>

            <TableCell>{episode.air_date}</TableCell>
            <TableCell>{episode.episode}</TableCell>
            <TableCell>{episode.created}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <Button className="mx-auto">Click me</Button>
    </>
  );
};
