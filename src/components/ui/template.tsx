import React from 'react'

type Props = {

} & React.ComponentProps<'div'>

export default function CompName({ className, ...props }: Props) {
  return (
    <div className={`${className} comp`} {...props}>MobileMenu</div>
  )
}
