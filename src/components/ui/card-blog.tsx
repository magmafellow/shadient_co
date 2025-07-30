import React from "react"
import Badge from "./badge"

type Props = {
  title: string
  imgUrl?: string
  tags: string[]
} & React.ComponentProps<"div">

export default function CardBlog({
  className,
  imgUrl,
  title,
  tags,
  ...props
}: Props) {
  return (
    <div className={`card-blog ${className}`} {...props}>
      {imgUrl && (
        <div className="card-blog__media">
          <img src={imgUrl} className="card-blog__media-img" />
        </div>
      )}

      {tags.length > 0 && (
        <div className="card-blog__tag-box">
          {tags.map((tag) => (
            <div key={tag} className="card-blog__tag-item">
              <Badge>{tag}</Badge>
            </div>
          ))}
        </div>
      )}

      <h3 className="card-blog__title typo-head-3 mb-0">{title}</h3>
      <div className="card-blog__action-box">
        <button className="card-blog__action-btn">
          <span>Read more</span>
          <img
            src="/icons/nav/arrow-right-outline.svg"
            alt="Arrow right in circle"
          />
        </button>
      </div>
    </div>
  )
}
