import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options";

export default async function Page() {
    const session = await getServerSession(options);
    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/member')
    }
    
    return (
        <>

        <div className="grid place-items-center h-screen">
            <div>
                <h1>Yellow</h1>
            </div>
        </div>
        </>
    );
}