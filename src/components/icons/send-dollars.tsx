import * as React from "react";
import { SVGProps } from "react";

const IconSendDollars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 8.23c-.8-.737-2.207-1.25-3.5-1.282M3 15.23c.752.925 2.15 1.453 3.5 1.498m0-9.781c-1.539-.038-2.917.604-2.917 2.36 0 3.23 6.417 1.615 6.417 4.846 0 1.842-1.708 2.634-3.5 2.575m0-9.781V5m0 11.729V19M13 12h8m0 0-3.84-4M21 12l-3.84 4"
    />
  </svg>
)
export default IconSendDollars
