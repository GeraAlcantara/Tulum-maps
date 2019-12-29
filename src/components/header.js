import PropTypes from "prop-types"
import React from "react"
import "typeface-comfortaa"
import { Typography } from "@material-ui/core"
import iconTulum from "../svg/icon.svg"
import styles from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#007A82`,
    }}
  >
    <div className={styles.headerstyle}
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
        padding: `1rem 1rem`,
      }}
    >
      <img src={iconTulum} alt="" style={{width: 30}} />
      <Typography
        component="h1"
        variant="h4"
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
