import './globals.css'
import { Inter } from 'next/font/google'
import ToastProvider from '../provs/ToastProvider';
const inter = Inter({ subsets: ['latin'] })

export const runtime = "edge";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="uplinkDark">
      <head />
      <body className="bg-base min-h-screen overflow-hidden">
        <ToastProvider>
          <div>
            <main>
              {children}
            </main>
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}
