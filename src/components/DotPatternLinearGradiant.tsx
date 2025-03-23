import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export default function DotPatternLinearGradient() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={10}
                cr={1}
                style={
                    {
                        width: "100%",
                        height: "100%",
                    }
                }
            />
        </div>
    );
}
