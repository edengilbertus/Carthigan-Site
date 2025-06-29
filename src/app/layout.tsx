import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientProviders } from "@/components/providers/ClientProviders"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carthigan Electronics",
  description: "Your Complete Technology Ecosystem",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-m3-sans bg-white text-black min-h-screen">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
