import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const Footer = (props) => (
    <footer id={"footer"}>
      <Grid container spacing={2} justify={"flex-end"} style={{fontSize: '0.75rem'}}>
        <Grid item xs={4}>
          <span>Let's see</span>
        </Grid>
        {/*<Grid item xs={4}>*/}
        {/*</Grid>*/}
        <Grid item xs={5} className={"footer copyright"}>
          <span>© Yifang Wang {new Date().getFullYear()} - Powered by &nbsp;</span>
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
        </Grid>
      </Grid>
    </footer>
)

export default Footer;
