import { graphql, Link, useStaticQuery } from "gatsby"
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
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

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


function Header({props}) {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);

  const handleMenuClick = () => {
    setShowDrawer(!showDrawer);
  }

  const toggleDrawer = (status) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(status);
  };

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const drawerList = (
    <div
      className='div-drawer-list'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {['Home', 'Blog', 'Photography', 'Video', 'Personal Project', 'Contact Me'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><HomeRoundedIcon/></ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
)

  return(
    <header>
      <div className="div-appbar">
        <AppBar position="sticky" style={{position: "sticky"}}>
          <Toolbar>
            <span className={classes.title}>
              <h6>{data.site.siteMetadata.title}</h6>
            </span>
            <IconButton color="inherit" className={classes.menuButton}
                        aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div className="div-left-drawer">
        <Drawer anchor={"left"} open={showDrawer} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
