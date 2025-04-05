import { Label } from "./label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select";

const StatusSelector = () => {
    return (
        <Label className="flex flex-col gap-2 text-start items-start">
            <span>Status</span>
            <Select>
                <SelectTrigger className="w-full cursor-pointer hover:border-primary transition-colors duration-300">
                    <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent className="bg-card border-0 rounded-sm p-2">
                    <SelectItem value="todo">Todo</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                </SelectContent>
            </Select>
        </Label>
    )
}

export default StatusSelector;
