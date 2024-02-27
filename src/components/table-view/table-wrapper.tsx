import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { DataTableProps } from "@/types";

import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Info } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";
import { PageControls } from "./page-controls";
import { Input } from "../ui/input";

export function TableWrapper<TData, TValue>({
  info,
  data,
  columns,
  children,
  next,
  prev,
  cur,
}: DataTableProps<TData, TValue>) {
  const [itemSelected, setItemSelected] = useState<unknown>();
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <Dialog>
      <Input
        name="filter-name"
        placeholder="Filter names..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm mx-auto mb-2"
      />

      <Table className="border max-w-4xl w-full rounded-lg">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <DialogTrigger asChild>
                  <TableCell className="">
                    <Button
                      onClick={() => setItemSelected(row.original)}
                      variant="ghost"
                      size="icon"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </DialogTrigger>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <PageControls next={next} prev={prev} max={info.pages} cur={cur} />

      <DialogContent className="sm:max-w-[425px]">
        {React.cloneElement(children, { item: itemSelected })}
      </DialogContent>
    </Dialog>
  );
}
