import Header from './ui/Header';
import Footer from './ui/Footer';
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}