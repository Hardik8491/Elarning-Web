import { HomeBar } from "@/components/component/homebar";
import StudentsPage from "./dashboard/students/page";

export default async function Home() {
    return (
        <main className='flex min-h-screen bg-white mt-16 '>
            {/* <HomeBar /> */}
            <StudentsPage/>
        </main>
    );
}
