import React from 'react'
import DataTable from '@/components/shared/table/data-table'
import { fetchUrlTags } from '@/app/(dashboard)/_utils/utils'
import { productColumns } from './data-table-columns'

const ProjectsTable = async () => {
  const baseUrl =   `${process.env.API_URL}/products`
  const response = await fetch(`${baseUrl}?page=${1}&limit=${10}`, { cache: 'force-cache' })
  const res = await response.json()

  return (
    <DataTable
      rawColumns={productColumns}
      initialData={res?.products}
      fetchUrlTag={fetchUrlTags.LOCAL_AUCTIONS}
    />
  )
}

export default ProjectsTable
