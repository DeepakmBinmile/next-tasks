import { MRT_TableOptions } from 'material-react-table'

export const muiDataTableStylesProps = <TData extends object>(): Omit<
  MRT_TableOptions<TData>,
  'columns' | 'data' | 'enableRowVirtualization'
> => ({
  muiTablePaperProps: {
    elevation: 0,
    sx: {
      borderRadius: '0',
      border: 'none',
      margin: '16px',
    },
  },
  muiTableProps: {
    sx: {
      border: 'none',
      boxShadow: 'none !important',
      '& .MuiTable-root': {
        boxShadow: 'none !important',
        border: 'none',
      },
    },
  },
  muiTableBodyCellProps: {
    height: '104px',
  },
  muiTableHeadCellProps: {
    sx: {
      boxShadow: 'none !important',
      border: '1px solid #E7E7E7',
      fontWeight: 'normal',
      fontSize: '14px',
    },
  },
  muiTableBodyRowProps: {
    sx: {
      '&:hover': {
        backgroundColor: '#000000',
      },
    },
  },
  muiTableBodyProps: {
    sx: {
      '& tr:nth-of-type(odd) > td': {
        backgroundColor: '#F5F5F5',
        border: '1px solid #E7E7E7',
      },
      '& tr:nth-of-type(even) > td': {
        backgroundColor: '#FFFFFF',
        border: '1px solid #E7E7E7',
      },
    },
  },
})
