'use client'
import { getCurrentTheme, switchTheme } from "@/lib/utils"
import { ChangeEvent, useEffect, useState } from "react"

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>('system')
    
    useEffect(() => {
        const currentTheme = getCurrentTheme()
        setTheme(currentTheme)
    }, [])

    const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const theme = e.target.value as Theme

        setTheme(theme)
        switchTheme(theme)
    }

    return (
        <div>
            <select value={theme} onChange={handleThemeChange}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
            </select>
        </div>
    )
}

export default ThemeSwitcher
