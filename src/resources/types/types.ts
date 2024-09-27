// Common

export type IChildren = Readonly<{ children: React.ReactNode }>
export interface IError {
  error: Error & { digest?: string }
  reset: () => void
}

// Pagination
export type IPagination = {
  limit: number
  page: number
  totalRecord: number
}

// Auction
export type IAuction = {
  auctionCategory: string
  auctionLocationUrl: string
  auctionPropertyType: string
  auctionType: string
  createdAt: string
  description: string
  descriptionAr: string
  endDate: string
  id: number
  minBidAmount: number
  noOfBidders: number
  preBidStartDate: string
  propertyName: string
  qualityScore: number
  refNo: string
  startDate: string
  status: string
  subscription: string
  updatedAt: string
  verifyStatus: boolean
  winningBidAmount: number
}

export type IAuctionApiResponse = {
  auctions: IAuction[]
  pagination: IPagination
}

// Activity
export interface IActivity {
  activity: string
  activityDate: string
  activityType: string
  auctionId: number
  companyName: string
  createdAt: string
  fileCategory: string
  fileUrl: string
  id: number
  portalUrl: string
  updatedAt: string
  userId: number
}

export interface IActivitiesResponse {
  activities: IActivity[]
  pagination: IPagination
}

// FAQ
export interface IFaq {
  Id: number
  answer: string
  createdAt: string
  deletedAt: string | null
  question: string
  refNo: string
  updatedAt: string
}

export interface IFaqsResponse {
  faqs: IFaq[]
  pagination: IPagination
}

// Partner
export interface IPartner {
  auctionId: number
  createdAt: string
  deletedAt: string | null
  id: number
  partnerLogo: string
  partnerName: string
  refNo: string
  updatedAt: string
  website: string
}

export interface IPartnerResponse {
  pagination: IPagination
  partner: IPartner[]
}

export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  images: string[]
  thumbnail: string
}
