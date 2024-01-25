import * as React from "react"
import { SVGProps } from "react"

const IconSendReceive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#2e3436"
      d="M1 12a1 1 0 0 1 1.707-.707L4 12.586V5c0-.55.45-1 1-1s1 .45 1 1v7.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 1 12zm6-8c0-.258.098-.512.293-.707l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414L12 3.414V11c0 .55-.45 1-1 1s-1-.45-1-1V3.414L8.707 4.707A1 1 0 0 1 7 4zm0 0"
    />
  </svg>
)
export default IconSendReceive
