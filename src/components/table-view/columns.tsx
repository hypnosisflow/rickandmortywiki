import { CharacterProps, EpisodeProps, LocationProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export const episodeCols: ColumnDef<EpisodeProps>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="w-full">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "url",
    header: "Url",
  },
  {
    accessorKey: "created",
    header: "Created",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created")).toLocaleDateString();
      return <div>{date}</div>;
    },
  },
];

export const charsCols: ColumnDef<CharacterProps>[] = [
  {
    accessorKey: "id",
    // header: "ID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="w-full">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    // header: "Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
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
    cell: ({ row }) => {
      const date = new Date(row.getValue("created")).toLocaleDateString();
      return <div>{date}</div>;
    },
  },
];

export const locationsCols: ColumnDef<LocationProps>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="w-full">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "url",
    header: "Url",
  },
  {
    accessorKey: "created",
    header: "Created",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created")).toLocaleDateString();
      return <div>{date}</div>;
    },
  },
];

export const columns = {
  episodeCols,
  charsCols,
  locationsCols,
};
