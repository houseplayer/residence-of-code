import Toast from "@/components/Toast"
import "./globals.css"
import Nav from "@/components/Nav"
export const metadata = {
  title: "NextJS template with TypeScript, TailwindCSS, and MongoDB",
  description: "NextJS template with TypeScript, TailwindCSS, and MongoDB, created by @clipper.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="p-4">
          {children}
          <Toast />
        </main>
      </body>
    </html>
  )
}
