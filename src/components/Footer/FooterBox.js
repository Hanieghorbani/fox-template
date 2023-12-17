import React, { Children } from "react"

export default function FooterBox({title,children}) {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">{title}</h1>
      <ul className="">
        {children}
      </ul>
      
    </div>
  )
}
