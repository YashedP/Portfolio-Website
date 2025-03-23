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
            {/* Dot grid background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    pointerEvents: "none",
                    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255, 255, 255, 0.8), transparent 20%)`,
                }}
            />

            <div className="absolute inset-0 -z-20 grid grid-cols-10 grid-rows-10 gap-2">
                {Array.from({ length: 100 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-2.5 h-2.5 bg-green-500 rounded-full transition-all transform"
                        style={{
                            transition: "all 0.2s ease",
                            transform: `scale(${Math.random() * 1.2 + 0.8})`,
                        }}
                    />
                ))}
            </div>

            {children}
        </div>
    );
}
