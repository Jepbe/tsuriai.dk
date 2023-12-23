import Nav from "./nav";
import styles from './styles.module.css'
// import { useEffect } from "react";


export default function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full z-50 drop-shadow-lg">
                <Nav />
        </header>        
    );
}