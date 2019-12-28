import PropTypes from "prop-types"
import React from "react"
import "typeface-comfortaa"
import { Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#007A82`,
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Typography
        component="h1" variant="h4"
        style={{
          margin: 0,
          color: `white`,
          fontFamily: `Comfortaa , arial`,
        }}
      >
        {siteTitle}
      </Typography>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
