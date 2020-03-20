import * as React from "react"

interface Props {
  name: string
}

let Hello = (props: Props): JSX.Element => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

export default Hello
