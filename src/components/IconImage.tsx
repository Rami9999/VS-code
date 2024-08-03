import React from 'react'

interface IProps {
    src:string
}
const IconImage = ({src}:IProps) => {
  return (
    <img src={src} alt="src" />
  )
}

export default IconImage