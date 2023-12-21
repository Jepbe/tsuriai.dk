import './ui/globals.css';
import Navbar from './ui/navbar/navbar';

export const metadata = {
  title: "Tsuriai Ryu Ju Jitsu",
  description: "Tsuriai Ryu Ju Jitsu by Nordic Code Group",
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html> 
    );
}