'use client';
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";

interface LabelledInputProps {
    label: string;
    value: string;
    error?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const LabelledInput = (props: LabelledInputProps) => {
    const {
        label,
        value,
        error,
        placeholder,
        onChange,
        name
    } = props;

    return (
        <Label className="flex flex-col gap-2 text-start items-start">
            <span>{label}</span>
            <Input name={name} className={cn("rounded-sm border-text-secondary/25 border", error && "border-destructive")} value={value} placeholder={placeholder} onChange={onChange} error={error} />
        </Label>
    )
}

export default LabelledInput;
