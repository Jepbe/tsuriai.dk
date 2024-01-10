import NavbarClient from "../ui/navbar/navbar-client";
import NavbarServer from "../ui/navbar/navbar-server";


export default function Page () {
    return (
    <>
        {/* Navbar */}
        <NavbarClient>
            <NavbarServer />
        </NavbarClient>

        <section>
            <div className="grid grid-flow-row grid-rows-2">
                <div className="w-screen h-[50vh] aboutImage">Image</div>
                <div>qwe</div>
            </div>
        </section>
    </>
    );
}