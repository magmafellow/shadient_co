import React from "react"

type Props = {
} & React.ComponentProps<'div'>

export default function ResponsiveContainer({ children, className, ...props }: Props) {
  return <div className={`responsive-container ${className}`} {...props} >{children}</div>
}
