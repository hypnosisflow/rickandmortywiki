import { CharacterProps, EpisodeProps, LocationProps } from "@/models";
import { ColumnDef } from "@tanstack/react-table";

export const episodeCols: ColumnDef<EpisodeProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "Url",
  },
  {
    accessorKey: "created",
    header: "Created",
  },
];

export const charsCols: ColumnDef<CharacterProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "created",
    header: "Created",
  },
];

export const locationsCols: ColumnDef<LocationProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "Url",
  },
  {
    accessorKey: "created",
    header: "Created",
  },
];

export const columns = {
  episodeCols,
  charsCols,
  locationsCols,
};
