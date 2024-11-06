import React, { useState, useMemo } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Filter,
  X,
} from "lucide-react";
import Swal from "sweetalert2";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
    );
  }
);

const DataTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Product A",
      category: "Electronics",
      price: 299.99,
      status: "Active",
    },
    {
      id: 2,
      name: "Product B",
      category: "Clothing",
      price: 59.99,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Product C",
      category: "Books",
      price: 19.99,
      status: "Active",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [columnFilters, setColumnFilters] = useState < ColumnFiltersState > [];
  const [pagination, setPagination] =
    useState <
    PaginationState >
    {
      pageIndex: 0,
      pageSize: 10,
    };
  const [sorting, setSorting] = useState < SortingState > [];

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "category",
        header: "Category",
        filterFn: "includesString",
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
      },
      {
        accessorKey: "status",
        header: "Status",
        filterFn: "includesString",
        cell: ({ getValue }) => (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              getValue() === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {getValue()}
          </span>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="text-blue-600 hover:text-blue-900"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => handleDelete(row.original)}
              className="text-red-600 hover:text-red-900"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      includesString: (row, columnId, value) =>
        row
          .getValue(columnId)
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase()),
    },
    state: {
      columnFilters,
      pagination,
      sorting,
    },
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleEdit = (row) => {
    // Implement edit functionality
    console.log("Edit", row);
  };

  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement delete functionality
        console.log("Delete", row);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const toggleFilterDrawer = () => {
    setFilterDrawerOpen(!filterDrawerOpen);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          onClick={toggleFilterDrawer}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 flex items-center"
        >
          <Filter size={18} className="mr-2" />
          Filters
        </button>
      </div>

      {filterDrawerOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={toggleFilterDrawer}
            ></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        className="ml-3 h-7 w-7 text-gray-400 hover:text-gray-500"
                        onClick={toggleFilterDrawer}
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <div className="mt-6">
                      {table.getVisibleColumns().map((column) =>
                        column.getCanFilter() ? (
                          <div key={column.id} className="mb-4">
                            <label
                              htmlFor={column.id}
                              className="block text-sm font-medium text-gray-700"
                            >
                              {column.getHeader()}
                            </label>
                            {flexRender(
                              column.getFacetedFilterComponents(),
                              column
                            )}
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      <table
        {...table.getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th
                  {...header.getHeaderProps(header.getSortBy())}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  <span>
                    {header.column.getIsSorted() ? (
                      header.column.getIsSortedDesc() ? (
                        <ChevronDown className="inline-block ml-1" size={14} />
                      ) : (
                        <ChevronUp className="inline-block ml-1" size={14} />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...table.getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {table.getRowModel().rows.map((row) => (
            <tr {...row.getRowProps()}>
              {row.getVisibleCells().map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                  1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) *
                    table.getState().pagination.pageSize,
                  data.length
                )}
              </span>{" "}
              of <span className="font-medium">{data.length}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">First</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Last</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
