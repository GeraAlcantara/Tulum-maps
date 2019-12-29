import React from "react"
import theme from "../../src/theme"
import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"


export default function TopLayout(props) {
  return (
    <React.Fragment>
     
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
