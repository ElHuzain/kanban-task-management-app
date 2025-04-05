'use client'
import { getCurrentTheme, switchTheme } from "@/lib/utils"
import { ChangeEvent, useEffect, useState } from "react"
import { Checkbox } from "./checkbox"
import { Label } from "./label"
import { cn } from "@/lib/utils"
import Image from "next/image"
const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>('system')
    
    useEffect(() => {
        const currentTheme = getCurrentTheme()
        setTheme(currentTheme)
    }, [])

    const handleThemeChange = (checked: boolean) => {
        const newTheme = checked ? 'dark' : 'light' as Theme
        setTheme(newTheme)
        switchTheme(newTheme)
    }

    const isChecked = theme === 'dark'

    return (
        <div className="bg-card flex items-center gap-4 p-4 rounded-sm w-fit">
            <Image src="/icon-light-theme.svg" alt="Light Theme" width={15} height={15} />
            <Label className="flex items-center gap-4 w-10 h-5 p-1 rounded-full bg-primary relative">
                <div className={cn("w-3 h-3 rounded-full absolute left-1 bg-white transition-transform duration-300", isChecked && "translate-x-[20px]")}></div>
                <span className="sr-only">Change theme</span>
                <Checkbox className="sr-only" checked={isChecked} onCheckedChange={handleThemeChange} /> 
            </Label>
            <Image src="/icon-dark-theme.svg" alt="Dark Theme" width={15} height={15} />
        </div>
    )
}

export default ThemeSwitcher
