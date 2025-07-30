import React from "react"

type Props = {
  name: string
  username: string
  avatarUrl: string
} & React.ComponentProps<"div">

export default function Userbar({
  className,
  avatarUrl,
  name,
  username,
  ...props
}: Props) {
  return (
    <div className={`userbar ${className}`} {...props}>
      <img
        className="userbar__avatar"
        src={avatarUrl}
        alt="Avatar of user of comment"
      />
      <div className="userbar__credentials-column">
        <div className="userbar__name">{name}</div>
        <div className="userbar__username">{username}</div>
      </div>
    </div>
  )
}
