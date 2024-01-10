import './ui/globals.css';

export const metadata = {
  title: "Tsuriai Ryu Ju Jitsu - Slagelse Selvforsvar - Kampsport",
  description: "Vi træner kampsporten Ju Jitsu. Med stort fokus på selvforsvar.",
  icons: {
    icon: '/favicon.ico'
  }  
};


export default function RootLayout({ children }) {
  return ( 
    <html lang="da">
      <body>
        {children}
      </body>
    </html> 
    );
}