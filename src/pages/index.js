import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import MuiLink from "@material-ui/core/Link"
import Link from "../components/Link"
import Image from "../components/image"
import SEO from "../components/seo"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const IndexPage = () => (
  <Container maxWidth="sm">
      <SEO title="Home" />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hi people
        </Typography>
        <Typography component="p" >
          Welcome to your new Gatsby site.
        </Typography>
        <Typography component="p" >
          Now go build something great.
        </Typography>
        <Link to="/page-2/" color="secondary">
          Go to page 2
        </Link>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
         <Image />
        </div>
        <Copyright />
      </Box>
    </Container>

)

export default IndexPage
