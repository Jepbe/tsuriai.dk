import { getServerSession } from 'next-auth';
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import TechniqueBank from '../ui/dashboard/techniqueBank';


export default async function Page() {
    const session = await getServerSession(options);
    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/dashboard')
    }   

    return(
        <div className='grid grid-cols-1 h-[90vh] sm:h-[80vh]'>
            <div className='bg-[#F4F4F4] rounded-none sm:rounded-lg  overflow-y-scroll'><TechniqueBank/></div>
            {/* <div className='bg-blue-300  overflow-y-scroll'><TechniqueBank/></div> */}

        </div>
    );
}