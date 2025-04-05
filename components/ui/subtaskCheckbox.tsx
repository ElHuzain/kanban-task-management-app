'use client';
import { Label } from "./label";
import { Checkbox } from "./checkbox";

const SubtaskCheckbox = ({ subtask }: { subtask: SubTask }) => {
    const { isCompleted, title } = subtask;

    const CheckedStyle = isCompleted ? "line-through text-text-title/50" : "";
    return (
        <Label className="flex items-center gap-4 bg-bg-deep p-4 rounded-sm group hover:bg-primary/20">
            <Checkbox checked={isCompleted} className="bg-bg h-4 w-4 border-2 border-lines" />
            <span className={`text-text-title body-bold ${CheckedStyle}`}>
                {title}
            </span>
        </Label>
    );
};

export default SubtaskCheckbox;
