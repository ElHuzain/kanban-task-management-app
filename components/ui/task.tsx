import { Button } from "./button";

const Task = ({
    task
}: {
    task: Task
}) => {
    const { title, description } = task;

    return (
        <Button className="group hover:bg-card cursor-pointer bg-card p-5 flex flex-col items-start gap-2 h-fit rounded-sm w-full">
            <h3 className="text-text-title heading-m group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-text-secondary body-bold">{description}</p>
        </Button>
    )
}

export default Task;
