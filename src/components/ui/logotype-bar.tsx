import React from 'react'

type Props = {
  className?: string
  imgClassName?: string
  textClassName?: string
}

export default function LogotypeBar({ className='', imgClassName='', textClassName='' }: Props) {
  return (
    <div className={`logotype-bar ${className}`}>
        <img src="/icons/brand/logotype.svg" alt="Shadient_co logotype" className={`logotype-bar__img ${imgClassName}`} />
        <span className={`logotype-bar__text ${textClassName}`}>Shadient.co</span>
    </div>
  )
}
