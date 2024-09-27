'use client'

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Modal, Box, Typography, Button, Grid, Divider, CircularProgress } from '@mui/material'
import { IProduct } from '@/resources/types/types'

const ProductModal = ({
  productId,
  setOpen,
  setProductId,
  open,
}: {
  open: boolean
  productId: number | null
  setOpen: (open: boolean) => void
  setProductId: Dispatch<SetStateAction<number | null>>
}) => {
  const [data, setData] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    setOpen(false)
    setData(null)
    setProductId(null)
  }

  const loadData = async () => {
    try {
      setLoading(true)
      const baseUrl = 'https://dummyjson.com/products'
      const response = await fetch(`${baseUrl}/${productId}`, { cache: 'force-cache' })
      if (!response.ok) {
        throw new Error('Failed to fetch product data')
      }
      const fetchedData = await response.json()
      setData(fetchedData)
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (open && productId) {
      loadData()
    }
  }, [open, productId])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        ) : (
          <>
            <Typography id="product-modal-title" variant="h6" component="h2">
              {data?.title}
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <img src={data?.thumbnail} alt={data?.title} style={{ width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2">
                  <strong>Price:</strong> ${data?.price}
                </Typography>
                <Typography variant="body2">
                  <strong>Category:</strong> {data?.category}
                </Typography>
                <Typography variant="body2">
                  <strong>Brand:</strong> {data?.brand}
                </Typography>
                <Typography variant="body2">
                  <strong>SKU:</strong> {data?.sku}
                </Typography>
                <Typography variant="body2">
                  <strong>Rating:</strong> {data?.rating} / 5
                </Typography>
                <Typography variant="body2">
                  <strong>Stock:</strong> {data?.stock}
                </Typography>
                <Typography variant="body2">
                  <strong>Availability:</strong> {data?.availabilityStatus}
                </Typography>
                <Typography variant="body2">
                  <strong>Weight:</strong> {data?.weight} kg
                </Typography>
                <Typography variant="body2">
                  <strong>Dimensions:</strong> {data?.dimensions.width} x {data?.dimensions.height} x{' '}
                  {data?.dimensions.depth} cm
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2">
                  <strong>Warranty:</strong> {data?.warrantyInformation}
                </Typography>
                <Typography variant="body2">
                  <strong>Shipping:</strong> {data?.shippingInformation}
                </Typography>
                <Typography variant="body2">
                  <strong>Return Policy:</strong> {data?.returnPolicy}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1">Reviews:</Typography>
            {data?.reviews.map((review, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Typography variant="body2">
                  <strong>{review.reviewerName}</strong> ({review.rating} / 5): {review.comment}
                </Typography>
              </Box>
            ))}

            <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
              Close
            </Button>
          </>
        )}
      </Box>
    </Modal>
  )
}

export default ProductModal
