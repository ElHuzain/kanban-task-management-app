type Theme = 'dark' | 'light' | 'system'

type SubTask = {
    title: string
    isCompleted: boolean
}

type Task = {
    title: string
    description: string
    status: string
    subtasks: SubTask[]
}

type Column = {
    id: string
    name: string
    tasks: Task[]
}

type Board = {
    id: string
    name: string
    columns: Column[]
}
