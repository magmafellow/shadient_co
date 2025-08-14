import React from "react"

type Item = {
  linkURL: string
  text: string
}

type Props = {
  items: Item[]
  title: string
} & React.ComponentProps<"div">

export default function ColFoot({ className, items, title, ...props }: Props) {
  return (
    <div className={`${className} col-foot`} {...props}>
      <div className="col-foot__title">{title}</div>
      {items.map((el) => (
        <a href={el.linkURL} className="col-foot__item">
          {el.text}
        </a>
      ))}
    </div>
  )
}
