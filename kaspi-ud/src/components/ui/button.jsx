import React from "react"

export const Button = ({ children, className = "", variant = "default", ...props }) => {
  const base =
    "px-4 py-2 rounded text-sm font-medium transition"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-100",
  }

  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
