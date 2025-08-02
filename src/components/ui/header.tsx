import React from 'react'
import ResponsiveContainer from './responsive-container'

type Props = {

} & React.ComponentProps<'header'>

export default function Header({className, ...props}: Props) {
  return (
    <header className={`${className} header`} {...props}>
      <ResponsiveContainer>
        <div className="header__container">
          
        </div>
      </ResponsiveContainer>
    </header>
  )
}
