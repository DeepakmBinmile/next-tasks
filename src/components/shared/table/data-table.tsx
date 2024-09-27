'use client'

import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  MRT_ColumnVirtualizer,
  MRT_Row,
  MRT_RowVirtualizer,
  type MRT_SortingState,
  type MRT_TableOptions,
  useMaterialReactTable,
} from 'material-react-table'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { muiDataTableStylesProps } from './data-table-styles'
import { UIEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Button, IconButton, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import LongMenu from './data-table-components'
import ProductModal from '../modal'

interface DataTableProps<IProduct extends object> {
  rawColumns: MRT_ColumnDef<IProduct>[]
  fetchUrlTag: string
  initialData?: IProduct[]
}

const DataTable = <IProduct extends object>({
  fetchUrlTag,
  rawColumns,
  initialData,
}: DataTableProps<IProduct>) => {
  const [data, setData] = useState<IProduct[]>(initialData || [])
  const [globalFilter, setGlobalFilter] = useState<string>('')
  const [sorting, setSorting] = useState<MRT_SortingState>([])
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [open, setOpen] = useState(false)
  const [productId, setProductId] = useState<number | null>(null)
  const [page, setPage] = useState(1)
  const [totalFetched, setTotalFetched] = useState(0)
  const [totalDBRowCount, setTotalDBRowCount] = useState(0)
  const columnVirtualizerInstanceRef = useRef<MRT_ColumnVirtualizer>(null)
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null)
  const dataTableStyles = muiDataTableStylesProps<IProduct>()
  const limit = 10
  const rowVirtualizerOptions = { overscan: 8 }
  const columnVirtualizerOptions = { overscan: 8 }
  const router = useRouter()
  const columns = useMemo<MRT_ColumnDef<IProduct>[]>(() => rawColumns, [rawColumns])
  const flatData = useMemo(() => data?.flatMap((page) => page) ?? [], [data])
  const muiToolbarAlertBannerProps: MRT_TableOptions<IProduct>['muiToolbarAlertBannerProps'] = isError
    ? {
        color: 'error',
        children: 'Error loading data',
        sx: { borderRadius: 2 },
      }
    : undefined

  const renderRowActions = (props: { row: MRT_Row<IProduct>; staticRowIndex?: number | undefined }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '4px' }}>
      <IconButton
        color="default"
        onClick={() => {
          const pData: IProduct = props.row.original
          setOpen(true)
          setProductId((pData as any).id as number)
        }}
      >
        <VisibilityIcon />
      </IconButton>
      <IconButton color="primary" onClick={() => {}}>
        <EditIcon />
      </IconButton>
      <IconButton
        color="error"
        onClick={() => {
          data.splice(props.row.index, 1)
          setData([...data])
        }}
      >
        <DeleteIcon />
      </IconButton>
      <LongMenu />
    </Box>
  )
  const renderTopToolbarCustomActions = () => (
    <Button
      size="small"
      variant="outlined"
      type="button"
      onClick={() => router.push('/dashboard/add-auction')}
    >
      Add auction
    </Button>
  )
  const muiTableContainerProps = {
    ref: tableContainerRef,
    sx: {
      maxHeight: '60vh',
      overflow: 'auto',
      scrollBehavior: 'smooth',
      scrollSnapType: 'y mandatory',
      '&::-webkit-scrollbar': {
        width: '0px',
        height: '0px',
      },
      '&::-webkit-scrollbar-thumb': {
        transition: '0.3s ease-in-out',
      },
    },
    onScroll: (event: UIEvent<HTMLDivElement>) => fetchMoreOnBottomReached(event.target as HTMLDivElement),
  }
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (scrollHeight - scrollTop - clientHeight < 800 && !isFetching && totalFetched < totalDBRowCount) {
          if (hasMore) {
            setPage((prevPage) => prevPage + 1)
          }
        }
      }
    },
    [totalFetched, isFetching, totalDBRowCount, hasMore],
  )
  useEffect(() => {
    const loadData = async () => {
      if (page === 1) {
        setIsLoading(true)
      }
      setIsFetching(true)
      setIsError(false)
      const baseUrl = 'https://dummyjson.com/products'

      try {
        const response = await fetch(
          `${baseUrl}?page=${page}&limit=${limit}&search=${globalFilter}&sort=${sorting}`,
          { cache: 'force-cache' },
        )
        const res = await response.json()
        const dd = Object.keys(res).filter((predicate) => predicate !== 'pagination')[0]
        const fetchedData = res[dd] || []
        const total = res?.pagination?.totalRecord || 0

        setData((prev) => [...prev, ...fetchedData])
        setTotalFetched((prev) => prev + fetchedData.length)
        setHasMore(fetchedData.length > 0)
        setTotalDBRowCount(total)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
        setIsFetching(false)
      }
    }

    if (fetchUrlTag) loadData()
  }, [page, fetchUrlTag, globalFilter, sorting, initialData])

  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0)
    } catch (error) {
      console.error(error)
    }
  }, [sorting, columnFilters, globalFilter])

  const config: MRT_TableOptions<IProduct> = {
    data: flatData ? flatData : [],
    columns,
    manualFiltering: false,
    manualSorting: false,
    enablePagination: false,
    enableRowNumbers: true,
    enableRowVirtualization: true,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: false,
    enableSorting: true,
    enableDensityToggle: false,
    columnVirtualizerInstanceRef,
    rowVirtualizerInstanceRef,
    rowVirtualizerOptions,
    muiTableContainerProps,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    muiToolbarAlertBannerProps,
    columnVirtualizerOptions,
    renderTopToolbarCustomActions,
    enableRowActions: true,
    positionActionsColumn: 'last',
    renderRowActions,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: 'Action button',
        size: 200,
      },
    },
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      sorting,
    },
    ...dataTableStyles,
  }

  const table = useMaterialReactTable(config)

  return (
    <>
      <MaterialReactTable table={table} />
      <ProductModal open={open} productId={productId} setOpen={setOpen} setProductId={setProductId} />
    </>
  )
}

export default DataTable
