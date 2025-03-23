import { ReactNode } from "react";
import { useState, useEffect } from "react";

export default function BackgroundWrapper({ children }: { children: ReactNode }) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener when component mounts and remove on unmount
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen">

            {children}
        </div>
    );
}
