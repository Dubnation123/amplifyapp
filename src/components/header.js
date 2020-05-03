import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Collapse from "@material-ui/core/Collapse"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Header({siteTitle}) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return(
    <header>
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <span className={classes.title}>
              <h6 >{siteTitle}</h6>
            </span>
            <IconButton color="inherit" className={classes.menuButton}
                        aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
