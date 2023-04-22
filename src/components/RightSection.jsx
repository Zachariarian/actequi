import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Route} from "react-router-dom";
import Predictor from "./predictor";
import Application from "./containers/Application";
import withWidth from "@material-ui/core/withWidth";
import Loans from "./containers/Overdraft";
import MobileHeader from "./MobileHeader";
//import LoginForm from "./accountBox/LoginForm";
//import SignupForm from "./accountBox/signupForm";
import Appy from "./containers/Appy";

//import Logo from "../equity-bank-logo.png"
const styles = theme => createStyles({
    root: {
        padding: 20,
    }
});

const RightSection = (props) => {
    const {classes} = props;
    return (
        <div>
            <MobileHeader isOpen={props.isDrawerOpen} toggleDrawer={props.toggleDrawer}/>
            <div className={classes.root}>
                <Route path="/" exact component={Appy} width={props.width}/>
                <Route path="/login" component={Appy} />
                <Route path="/signup" component={Appy} />
                <Route path="/predict" component={Predictor} width={props.width}/>
                <Route path="/apply" component={Application} />
                <Route path="/overdraft" component={Loans} />
            </div>
        </div>
    );
};


export default withWidth()(withStyles(styles)(RightSection));