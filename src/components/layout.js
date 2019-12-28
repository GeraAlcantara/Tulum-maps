/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import WrapperVh from "./WrapperVh"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <WrapperVh>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            height: `calc(100% - 100px)`
          }}
        >
          {children}
        </main>
        <footer
          style={{
            margin: `0 auto`,
            width: `100%`,
            position: "fixed",
            bottom: `0`,
            textAlign: `center`,
            backgroundColor: `#8DC6BD`,
            fontFamily: `Helvetica, Arial, sans-serif`,
          }}
        >
          <p
            style={{
              margin: `5px auto 5px auto`,
            }}
          >
            {" "}
            © {new Date().getFullYear()}, Tulum-maps
          </p>
        </footer>
      
    </WrapperVh>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
