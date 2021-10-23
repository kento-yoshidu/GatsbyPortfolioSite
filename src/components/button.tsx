import * as React from "react"
import { Link } from "gatsby"

const Styles = require("../styles/button.module.scss")

interface Props {
  text: string
  path: string
}

const Button: React.VFC<Props> = ({text, path}) => {
  return (
    <div className={Styles.wrapper}>
      <Link
        to={`${path}/`}
        className={Styles.button}
      >
        {text}
      </Link>
    </div>
  )
}

export default Button