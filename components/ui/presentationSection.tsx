import { cn } from "@/lib/utils";

interface PresentationSectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}

const PresentationSection = ({ title, description, children, className }: PresentationSectionProps) => {
    return (
        <div className="space-y-2">
            <h2 className="text-text-title">{title}</h2>
            {
                description && (
                    <p>{description}</p>
                )
            }
            <div className={cn("flex flex-col gap-2", className)}>
                {children}
            </div>
        </div>
    )
}

export default PresentationSection;
