import * as React from "react"

const TabsContext = React.createContext()

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = React.useState(defaultValue)
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>
}

export function TabsTrigger({ value, children }) {
  const { value: current, setValue } = React.useContext(TabsContext)
  const isActive = current === value
  return (
    <button
      className={`px-4 py-2 border-b-2 ${
        isActive ? "border-black font-bold" : "border-transparent text-gray-500"
      }`}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children }) {
  const { value: current } = React.useContext(TabsContext)
  return current === value ? <div>{children}</div> : null
}
