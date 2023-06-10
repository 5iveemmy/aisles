import React from "react"
import {
  flexRender,
  SortingState,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  PaginationState,
} from "@tanstack/react-table"
import {
  Box,
  Button,
  Flex,
  Select,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

type Props = {
  data: object[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any
  height?: string
  loading?: boolean
}

const EmptyState = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Text fontSize="md">No data</Text>
    </Flex>
  )
}

const StyledTable = ({ data, columns, height, loading = false }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

  const TableLoader = () => {
    return (
      <Tr height="50vh">
        <Td colSpan={columns.length} textAlign="center">
          {loading ? (
            <Box display="inline-block">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="brand.primary"
                size="lg"
              />
            </Box>
          ) : (
            <EmptyState />
          )}
        </Td>
      </Tr>
    )
  }

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data,
    columns,
    pageCount: 10,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  return (
    <>
      <Box>
        <TableContainer minH={height && height}>
          <Table>
            <Thead bgColor="#F1F2F4">
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Th
                      key={header.id}
                      fontSize="13px"
                      color="#353542"
                      p="52px 0.5rem 0.5rem 1rem"
                      textTransform="capitalize"
                      letterSpacing="0px"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            {data?.length > 0 ? (
              <Tbody bgColor="white">
                {table.getRowModel().rows.map((row) => (
                  <Tr key={row.id} cursor="pointer">
                    {row.getVisibleCells().map((cell) => (
                      <Td
                        key={cell.id}
                        color="#353542"
                        fontSize="13px"
                        px="1rem"
                        borderBottom="#E9E9E9 1px solid"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            ) : (
              <TableLoader />
            )}
          </Table>
        </TableContainer>
        {data.length > 9 && (
          <Box
            display="flex"
            justifyContent="end"
            gap="12px"
            alignItems="center"
            margin="12px 40px 18px"
          >
            <Text color="#2d4875" fontSize="14px">
              Show
            </Text>

            <Select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
              width="70px"
              color="#2d4875"
              fontSize="14px"
            >
              {[15, 30, 45, 60].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Select>
            <Text fontSize="14px" fontWeight="400" color="#2d4875">
              Results
            </Text>
            <Box display="flex" gap="8px" pl="38px" alignItems="baseline">
              <Button
                variant="outline"
                fontWeight="normal"
                fontSize="14px"
                width="65px"
                height="38px"
                color="#2d4875"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Prev
              </Button>
              <Box
                border="1px solid #EBEBF2"
                height="38px"
                minWidth="38px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="14px" fontWeight="400" color="#2d4875">
                  {table.getState().pagination.pageIndex + 1}
                </Text>
              </Box>
              ...
              <Box
                border="1px solid #EBEBF2"
                height="38px"
                minWidth="38px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="14px" fontWeight="400" color="#2d4875">
                  {table.getPageCount()}
                </Text>
              </Box>
              <Button
                variant="outline"
                fontWeight="normal"
                fontSize="14px"
                width="65px"
                height="38px"
                color="#2d4875"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}

export default StyledTable
