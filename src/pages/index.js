import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import PeopleSvg from  "../svg/people.svg"
import Button from "@material-ui/core/Button"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"
import Pdf from "../static/MapainteractivoTulum.pdf"
import PdfTwo from "../static/Mapainteractivo.pdf"


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
            className={styles.MuiTypographybody1}
            style={{
              position: `relative`,
              top: `-20px`,
            }}
          >
            without getting lost
          </Typography>

          <div className={styles.wrapperbtns}>
            <Button
              variant="contained"
              color="secondary"
              href={Pdf}
              download="Tulum-maps"
              startIcon={<CloudDownloadIcon />}
            >
              PDF Map 1
            </Button>
            <Button
              className={styles.downbtn}
              variant="contained"
              color="secondary"
              href={PdfTwo}
              download="Tulum-maps-and-yucatan"
              startIcon={<CloudDownloadIcon />}
            >
              Map 2
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
