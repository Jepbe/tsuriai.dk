import './ui/globals.css';
import Navbar from './ui/navbar/navbar.jsx';

export const metadata = {
  title: "Tsuriai Ryu Ju Jitsu - Slagelse Selvforsvar - Kampsport",
  description: "Vi træner kampsporten Ju Jitsu. Med stort fokus på selvforsvar.",
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html> 
    );
}