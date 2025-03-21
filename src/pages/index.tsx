import Timeline from "@/components/Timeline";
import Header from "@/components/Header"

export default function Home() {
    return (
        <>
            <Header />
            <div className="h-screen flex justify-center items-center">
                <Timeline />
            </div>
        </>
    );
}
