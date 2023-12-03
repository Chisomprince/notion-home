"use client";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUsersStore from "@/store/useUsersStore";

// import {roles} from "../data/data";
// import { DataTableFacetedFilter } from "./data-table-faceted-filter";

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { deleteMultiple } = useUsersStore();

  const selectedRows = table.getSelectedRowModel().rows;

  const handleDeleteMutiple = () => {
    const selectedIds = selectedRows.map((row) => +row.original.id);
    deleteMultiple(selectedIds);
    table.toggleAllPageRowsSelected(false);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {table.getFilteredSelectedRowModel().rows.length ? (
        <Button onClick={() => handleDeleteMutiple()}>
          Delete {table.getFilteredSelectedRowModel().rows.length} User(s)
        </Button>
      ) : null}
    </div>
  );
}
