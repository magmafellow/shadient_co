import React from "react"

type Props = {
  title: string,
  imgUrl: string,
  description: string,
} & React.ComponentProps<"div">

export default function CardOffer({
  className,
  imgUrl,
  title,
  description,
  ...props
}: Props) {
  return (
    <div className={`card-offer ${className}`} {...props}>
      <div className="card-offer__media">
        <img src={imgUrl} className="card-offer__media-img" />
      </div>
      <h3 className="card-offer__title typo-head-3 mb-0">{title}</h3>
      <p className="card-offer__description typo-body">{description}</p>
    </div>
  )
}
