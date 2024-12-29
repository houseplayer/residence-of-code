import Toast from "@/components/Toast"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import "./globals.css"
import Nav from "@/components/Nav"
export const metadata = {
  title: "NextJS template with TypeScript, TailwindCSS, and MongoDB",
  description: "NextJS template with TypeScript, TailwindCSS, and MongoDB, created by @clipper.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Nav />
          <main className="p-4">
            {children}
            <Toast />
          </main>
        </body>
      </UserProvider>
    </html>
  )
}
