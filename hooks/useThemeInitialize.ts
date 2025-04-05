
import { getCurrentTheme, switchTheme } from "@/lib/utils"
import { useEffect } from "react"

const useThemeInitialize = () => {
    useEffect(() => {
        const theme = getCurrentTheme()
        switchTheme(theme)
    }, [])
}

export default useThemeInitialize
