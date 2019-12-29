import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import PeopleSvg from  "../svg/people.svg"
// import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import styles from "../styles/index.module.scss"
import Pdf from "../static/MapainteractivoTulum.pdf"


const useStyles = makeStyles(theme => ({
  splitscreen: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: 140,
      margin: "0 auto",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      maxWidth: 140,
      margin: "0 auto",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 200,
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 250,
      margin: "0 auto",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 300,
    },
  },
  wrapperAction: {
    [theme.breakpoints.down("xs")]: {
      color: "white",
      minHeight: 180,
    },
    [theme.breakpoints.up("lg")]: {
      color: "white",
      minHeight: 300,
    },
  },
}))

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <div className={styles.wrapperLanding}>
        <img src={PeopleSvg} alt="" />
        <div>
          <Typography variant="h4" component="h2">
            Explore
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            style={{ position: `relative`, top: `-12px` }}
          >
            Tulum
          </Typography>
          <Typography
            style={{
              position: `relative`,
              top: `-20px`,
              fontSize: `0.75rem`,
            }}
          >
            without getting lost
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href={Pdf}
            download="Tulum-maps"
            startIcon={<CloudDownloadIcon />}
          >
            PDF Map
          </Button>
        </div>
      </div>
    </Layout>
  )
}


// const IndexPage = () => {
//   const classes = useStyles()
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <Grid
//         container
//         direction="row"
//         justify="center"
//         alignItems="flex-end"
//         spacing={1}
//         style={{
//           height: `100%`,
//         }}
//       >
//         <Grid item xs={6} >
//           <img src={PeopleSvg} alt="" />
//         </Grid>
//         <Grid item xs={6}>
//           <div className={classes.wrapperAction}>
//             <Typography variant="h4" component="h2">
//               Explore
//             </Typography>
//             <Typography
//               variant="h2"
//               component="h2"
//               style={{ position: `relative`, top: `-12px` }}
//             >
//               Tulum
//             </Typography>
//             <Typography
//               style={{
//                 position: `relative`,
//                 top: `-20px`,
//                 fontSize: `0.75rem`,
//               }}
//             >
//               without getting lost
//             </Typography>
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<CloudDownloadIcon />}
//             >
//               PDF Map
//             </Button>
//           </div>
//         </Grid>
//       </Grid>
//     </Layout>
//   )}

export default IndexPage
