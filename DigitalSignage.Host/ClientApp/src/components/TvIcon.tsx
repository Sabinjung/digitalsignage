import * as React from "react"

function TvIcon({...rest}) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
      <path d="M17 2l-5 5-5-5" />
    </svg>
  )
}

export default TvIcon
