import { CartSidebar } from '@/components/supply/CartSidebar'

export default function SupplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <CartSidebar />
    </>
  )
} 