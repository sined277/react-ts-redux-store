import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="142" cy="99" r="95" /> 
    <rect x="20" y="214" rx="10" ry="10" width="253" height="70" /> 
    <rect x="20" y="298" rx="10" ry="10" width="117" height="38" /> 
    <rect x="150" y="298" rx="10" ry="10" width="117" height="38" />
  </ContentLoader>
)

export default PizzaSkeleton

