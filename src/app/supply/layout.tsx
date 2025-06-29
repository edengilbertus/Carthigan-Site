import { CartSidebar } from '@/components/supply/CartSidebar'
import { SupplyNavigation } from '@/components/supply/SupplyNavigation'
import { SupplyFooter } from '@/components/supply/SupplyFooter'

export default function SupplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SupplyNavigation />
      {children}
      <SupplyFooter />
      <CartSidebar />
    </>
  )
} 