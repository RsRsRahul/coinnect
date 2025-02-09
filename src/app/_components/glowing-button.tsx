import type React from "react"
import type { ReactNode } from "react"
import type { ButtonHTMLAttributes } from "react"

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-green-400 blur-xl"></div>
      </div>
    </button>
  )
}

export default GlowingButton

