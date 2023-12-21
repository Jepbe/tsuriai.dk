import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function CreateUser() {
    const session = getServerSession(options);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/CreateUser')
    }

    return (
        <h1>Only Admins!</h1>
    );
}