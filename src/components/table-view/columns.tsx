import { CharacterProps } from "@/models";
import { ColumnDef } from "@tanstack/react-table";

const columnsChars = ["Name", "Status", "Species", "Gender", "Created", "URL"];

export const columns: ColumnDef<CharacterProps>[] = [
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

export const charsCols = [
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
