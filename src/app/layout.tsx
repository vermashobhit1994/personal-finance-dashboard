import "./globals.css"
import { Header } from "@/shared/layout/Header"
import { Footer } from "@/shared/layout/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}