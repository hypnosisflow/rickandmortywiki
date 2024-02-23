import { useState } from "react";

import { Table } from "@/components/ui/table";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { CharacterProps, EpisodeProps, LocationProps } from "@/models";
import { CharactersTable } from "./characters/characters-table";
import { CharacterCard } from "./characters/character-card";
import { LocationsTable } from "./locations/locations-table";
import { LocationCard } from "./locations/location-card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EpisodesTable } from "./episodes/episodes-table";
import { EpisodeCard } from "./episodes/episode-card";

export function TableView() {
  const [charSelected, setCharSelected] = useState<CharacterProps>();
  const [locoSelected, setLocoSelected] = useState<LocationProps>();
  const [episodeSelected, setEpisodeSelected] = useState<EpisodeProps>();

  return (
    <Dialog>
      <Tabs defaultValue="Characters" className="">
        <TabsList className="mx-auto flex w-fit mt-4">
          <TabsTrigger value="Characters">Characters</TabsTrigger>
          <TabsTrigger value="Locations">Locations</TabsTrigger>
          <TabsTrigger value="Episodes">Episodes</TabsTrigger>
        </TabsList>

        <Table>
          <TabsContent value="Characters">
            <CharactersTable setSelectedItem={setCharSelected} />
            <DialogContent className="sm:max-w-[425px]">
              <CharacterCard selectedItem={charSelected} />
            </DialogContent>
          </TabsContent>

          <TabsContent value="Locations">
            <LocationsTable setSelectedItem={setLocoSelected} />
            <DialogContent className="sm:max-w-[425px]">
              <LocationCard selectedItem={locoSelected} />
            </DialogContent>
          </TabsContent>

          <TabsContent value="Episodes">
            <EpisodesTable setEpisodeSelected={setEpisodeSelected} />
            <DialogContent className="sm:max-w-[425px]">
              <EpisodeCard selectedItem={episodeSelected} />
            </DialogContent>
          </TabsContent>
        </Table>
      </Tabs>
    </Dialog>
  );
}
