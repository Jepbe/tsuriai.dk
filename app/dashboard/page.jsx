import { getServerSession } from 'next-auth';
import { options } from "../api/auth/[...nextauth]/options";
// import { Redirect } from 'next';


export default async function Page() {
    const session = await getServerSession(options);
    return(
        <p>Dashboard Page</p>
    );
}