import { IChildren } from '@/resources/types/types'
import DashboardLayoutWrapper from './_components/dashboard-layout'

export default function DashboardLayout({ children }: IChildren) {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
}
