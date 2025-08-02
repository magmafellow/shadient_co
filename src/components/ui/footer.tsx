import React from 'react'
import ResponsiveContainer from './responsive-container'

type Props = {

} & React.ComponentProps<'footer'>

export default function Footer({className, ...props}: Props) {
  return (
    <footer className={`${className} footer base-section`} {...props}>
      <ResponsiveContainer>
        Footer
      </ResponsiveContainer>
    </footer>
  )
}
