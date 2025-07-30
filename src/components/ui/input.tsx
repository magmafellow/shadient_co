


import React from 'react'

type Props = {} & React.ComponentProps<'input'>

export function InputDefault({ className, ...props }: Props) {
  return (
    <input className={`input input-default ${className}`} {...props} />
  )
}


export function InputWhite({ className, ...props }: Props) {
  return (
    <input className={`input input-white ${className}`} {...props} />
  )
}
