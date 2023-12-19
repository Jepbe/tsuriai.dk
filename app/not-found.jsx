import Link from "next/link";

export default function Page() {
    return(
        <div className="flex justify-center items-center h-screen">
            <h1>Error 404 - <Link className="text-blue-600 underline" href={"/"}>Not found...</Link></h1>
        </div>
    );
}