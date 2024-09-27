'use client'
import { IProduct } from '@/resources/types/types'
import { MRT_ColumnDef } from 'material-react-table'

export const productColumns: MRT_ColumnDef<IProduct>[] = [
  {
    header: 'Product ID',
    accessorKey: 'id',
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
    size: 300,
    Cell: ({ cell }) => <span>{cell.getValue<string>().slice(0, 50)}...</span>,
  },
  {
    header: 'Category',
    accessorKey: 'category',
  },
  {
    header: 'Price',
    accessorKey: 'price',
    Cell: ({ cell }) => `$${cell.getValue<number>().toFixed(2)}`,
  },
  {
    header: 'Discount',
    accessorKey: 'discountPercentage',
    Cell: ({ cell }) => `${cell.getValue<number>()}%`,
  },
  {
    header: 'Rating',
    accessorKey: 'rating',
    Cell: ({ cell }) => `${cell.getValue<number>().toFixed(1)} / 5`,
  },
  {
    header: 'Stock',
    accessorKey: 'stock',
  },
  {
    header: 'Tags',
    accessorKey: 'tags',
    Cell: ({ cell }) => cell.getValue<string[]>().join(', '),
  },
  {
    header: 'Brand',
    accessorKey: 'brand',
  },
  {
    header: 'SKU',
    accessorKey: 'sku',
  },
  {
    header: 'Weight (g)',
    accessorKey: 'weight',
  },
  {
    header: 'Dimensions',
    accessorKey: 'dimensions',
    Cell: ({ cell }) => {
      const dimensions = cell.getValue<{ width: number; height: number; depth: number }>()
      return `${dimensions.width} x ${dimensions.height} x ${dimensions.depth} cm`
    },
  },
  {
    header: 'Warranty',
    accessorKey: 'warrantyInformation',
  },
  {
    header: 'Shipping Info',
    accessorKey: 'shippingInformation',
  },
  {
    header: 'Availability',
    accessorKey: 'availabilityStatus',
  },
  {
    header: 'Return Policy',
    accessorKey: 'returnPolicy',
  },
  {
    header: 'Created At',
    accessorKey: 'meta.createdAt',
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  },
  {
    header: 'Updated At',
    accessorKey: 'meta.updatedAt',
    Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
  },
  {
    header: 'Barcode',
    accessorKey: 'meta.barcode',
  },
  {
    header: 'QR Code',
    accessorKey: 'meta.qrCode',
    Cell: ({ cell }) => (
      <a href={cell.getValue<string>()} target="_blank" rel="noopener noreferrer">
        View QR Code
      </a>
    ),
  },
  {
    header: 'Thumbnail',
    accessorKey: 'thumbnail',
    Cell: ({ cell }) => <img src={cell.getValue<string>()} alt="Thumbnail" width={50} height={50} />,
  },
]
