import React from 'react'

type Props = React.ComponentProps<'div'>

export default function Badge({ className, children, ...props }: Props) {
  return (
    <div className={`badge ${className}`}>{children}</div>
  )
}
