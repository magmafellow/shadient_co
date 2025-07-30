import React from "react"
import Userbar from "./userbar"

type Props = {
  comment: string
  username: string
  name: string
  avatarUrl: string
} & React.ComponentProps<"div">

export default function CardReview({
  className,
  username,
  name,
  comment,
  avatarUrl,
  ...props
}: Props) {
  return (
    <div className={`card-review ${className}`} {...props}>
      <Userbar
        className="card-review__userbar"
        username={username}
        name={name}
        avatarUrl={avatarUrl}
      />
      <p className="card-review__comment">{comment}</p>
    </div>
  )
}
