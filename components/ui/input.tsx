import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, error, ...props }: React.ComponentProps<"input"> & { error?: string }) {
  return (
    <div className="relative w-full">
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-text-title/25 text-text-title selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:ring-ring/50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
        )}
        {...props}
      />
      <div className="absolute bottom-2 !right-4 pointer-events-none flex items-center justify-center text-text-secondary">
        <span className="text-destructive text-xs">{error}</span>
      </div>
    </div>
  )
}

export { Input }
