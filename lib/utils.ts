import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Checks if current is client-side
 * 
 * @returns true if current is client-side, false otherwise
 */
export function isClient() {
  return typeof window !== 'undefined'
}

/**
 * Maps theme to local storage or system preference
 * 
 * @param theme - The theme to map
 * 
 * returns theme from local storage or system preference
 */
export function getTheme(theme: Theme): Theme {
  if (!isClient()) throw new Error('getTheme must be called on client')

  if (theme === 'system') {
    const OSPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return OSPreference as Theme
  }

  return theme
}

/**
 * Does the browser have local theme
 * 
 * @returns true if browser has local theme, false otherwise
 */
export function hasLocalTheme() {
  if (!isClient()) throw new Error('hasLocalTheme must be called on client')
  return localGet('theme') !== null
}

/**
 * Get current theme
 * 
 * @returns 'dark' if current theme is dark, 'light' if current theme is light
 */
export function getCurrentTheme(): Theme {
  if (!isClient()) throw new Error('getCurrentTheme must be called on client')
  const hasTheme = hasLocalTheme()
  const localTheme = localGet('theme')

  if (hasTheme && (localTheme === 'dark' || localTheme === 'light')) {
    return localTheme as Theme
  }

  // in case it was another value.. some edge case idk if it'll ever happen.
  if (hasTheme) {
    localRemove('theme')
  }

  return 'system'
}

/**
 * Switch theme
 * 
 * @param theme - The theme to switch to
 */
export function switchTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', getTheme(theme) === 'dark')

  if (theme === 'system') {
    localRemove('theme')
    return
  }

  localSave('theme', theme)
}

/**
 * Add an item to local storage
 * 
 * @param key - The key to store the item under
 * @param value - The value to store
 */
export function localSave(key: string, value: string) {
  if (!isClient()) throw new Error('localSave must be called on client')
  localStorage.setItem(key, value)
}

/**
 * Get an item from local storage
 * 
 * @param key - The key to get the item from
 * @returns The item from local storage
 */
export function localGet(key: string) {
  if (!isClient()) throw new Error('localGet must be called on client')
  return localStorage.getItem(key)
}

/**
 * Remove an item from local storage
 * 
 * @param key - The key to remove the item from
 */
export function localRemove(key: string) {
  if (!isClient()) throw new Error('localRemove must be called on client')
  localStorage.removeItem(key)
}
