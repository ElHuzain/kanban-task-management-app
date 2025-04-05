'use client'
import { getCurrentTheme, localGet, switchTheme } from "@/lib/utils"
import { useEffect, useState } from "react"
const ThemeSwitcher = () => {
    const currentTheme = getCurrentTheme()

    const [theme, setTheme] = useState<Theme>(currentTheme)

    useEffect(() => {
        setTheme(currentTheme)
    }, [currentTheme])

    const handleThemeChange = (theme: Theme) => {
        switchTheme(theme)
    }

    return (
        <div>
            <select defaultValue={currentTheme || 'system'} onChange={(e) => handleThemeChange(e.target.value as Theme)}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
            </select>
        </div>
    )
}

export default ThemeSwitcher
