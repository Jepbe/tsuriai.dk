import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getServerSession(options);
    
    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/member')
    }

    return (
        <div className="h-screen grid place-items-center">
            <div>
                <h1 className="text-xl">Member Server Session</h1>
                <br />
                <p>{session?.user?.email}</p>
                <p>{session?.user?.role}</p>
            </div>
        </div>
    );
}