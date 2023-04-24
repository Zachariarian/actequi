import React from "react";
import { useNavigate } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => createStyles({
  icon: {
    fontSize: "0.8rem"
  }
});

const MobileHeader = props => {
  const { classes } = props;
  const navigate = useNavigate();
  const fullList = (
    <div className={classes.list}>
      <List>
        {[{ title: "Login", link: "/login" }, { title: "Signup", link: "/signup" }, { title: "Predictor", link: "/predict" }, { title: "Apply", link: "/apply" }, { title: "My Loans", link: "/loans" }].map((menu, index) => (
          <ListItem button key={menu.title} onClick={() => navigate(menu.link) || props.toggleDrawer()}>
            <ListItemText primary={menu.title} />
            <ListItemIcon>{<Icon>chevron_right</Icon>}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Hidden lgUp>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={props.toggleDrawer}><Icon style={{ color: "white" }}>menu</Icon></IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            E<MonetizationOn className={classes.icon} />quidraft
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={props.isOpen}
      >
        {console.log(props)}
        <div
          tabIndex={0}
          role="button"
        >
          {fullList}
        </div>
      </Drawer>
    </Hidden>
  );
};

export default withStyles(styles)(MobileHeader);
