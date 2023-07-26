
import { SVGProps } from "react"
const SearchSvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21px"
    height="21px"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m20.735 19.496-6.025-6.03a8.14 8.14 0 0 0 1.902-5.233c0-4.536-3.722-8.224-8.302-8.224C3.731.009 0 3.7 0 8.237s3.723 8.225 8.302 8.225a8.324 8.324 0 0 0 5.156-1.782l6.046 6.047a.848.848 0 0 0 1.231 0 .848.848 0 0 0 0-1.231ZM1.765 8.237c0-3.563 2.935-6.46 6.537-6.46s6.537 2.897 6.537 6.46c0 3.564-2.935 6.46-6.537 6.46s-6.537-2.9-6.537-6.46Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h21v21H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SearchSvgComponent