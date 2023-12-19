import './ui/globals.css';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({ children }) {

  return ( 
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html> 
    );
}