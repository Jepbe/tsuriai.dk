import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options";

export default async function Page() {
    const session = await getServerSession(options);
    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/dashboard')
    }
    return (
        <div className="grid place-items-center h-screen">
            <div>
                <h1>Orange</h1>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1lCWaZPKChw?si=GkRa5UNP3OtB15wl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}