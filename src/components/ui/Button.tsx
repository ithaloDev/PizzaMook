import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    size?: "sm" | "md" | "lg" | "full"
}

const sizeClasses = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-3 px-6 text-lg",
    full: "w-full py-3 text-lg"
}

export const Button = ({children, size="lg"}: ButtonProps) => {
    return (
        <button className={`bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-md text-white text-lg font-medium shadow-lg cursor-pointer ${sizeClasses[size]}`}>
            {children}
        </button>
    )
}