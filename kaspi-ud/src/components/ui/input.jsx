import React from "react"

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
})
Input.displayName = "Input"
