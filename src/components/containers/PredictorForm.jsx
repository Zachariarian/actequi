import React, { Fragment } from "react";
import { connect } from "react-redux";
import SliderControl from "../SliderControl";
import Grid from "@material-ui/core/Grid";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  changeLoanType,
  changeModel,
  getInterest,
} from "../actions/PredictorAction";
import CircularGraph from "../CircularGraph";
import withWidth from "@material-ui/core/withWidth";
import Icon from "@material-ui/core/Icon";
import { useNavigate } from "react-router-dom";

const styles = (theme) =>
  createStyles({
    root: {},
    controls: {
      padding: 70,
      [theme.breakpoints.down("sm")]: {
        padding: "15px",
        position: "absolute",
        top: "145vw",
        left: 0,
        width: "100vw",
      },
    },
    toggleContainer: {
      height: 56,
      padding: `0 ${theme.spacing(2)}px`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: `${theme.spacing(1)}px 0`,
      background: theme.palette.background.default,
      [theme.breakpoints.down("sm")]: {
        padding: 0,
        margin: 0,
        width: "100%",
      },
    },
    toggleButton: {
      padding: 10,
      height: 50,
      width: "33.33%",
    },
    buttonGroup: {
      width: "100%",
    },
    label: {
      padding: `0 ${theme.spacing(2)}px`,
    },
    buttonContainer: {
      padding: `${theme.spacing(5)}px ${theme.spacing(1)}px`,
      textAlign: "right",
    },
  });

function PredictorForm(props) {
  const { classes } = props;
  const navigate = useNavigate();

  React.useEffect(() => {
    props.onInit(props.values.loanAmount, props.values.termLength);
  }, [props]);

  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} md={6} className={classes.controls}>
          <Typography variant="h6" className={classes.label}>
            Overdraft Type
          </Typography>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
              value={props.values.loanType.title}
              exclusive
              className={classes.buttonGroup}
            >
              {props.data.loanTypes.map((loanType, index) => (
                <ToggleButton
                  onClick={() => props.changeType(loanType)}
                  value={loanType.title}
                  key={"loan_" + index}
                  className={classes.toggleButton}
                >
                  {props.width === "sm" || props.width === "xs" ? (
                    <Icon>{loanType.icon}</Icon>
                  ) : (
                    <CircularGraph
                      percentage={loanType.percentage}
                      strokeWidth={6}
                      text={loanType.title}
                      textColor={theme.palette.primary.main}
                      trailColor={theme.palette.grey[300]}
                      gradient={[
                        theme.palette.primary.main,
                        theme.palette.grey[600],
                      ]}
                      width={50}
                      height={50}
                    />
                  )}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
          <<Typography variant="h6" className={classes}>
          {props.values.loanType.title}
        </Typography>        
          <SliderControl
            min={1}
            max={4}
            step={1}
            defaultValue={props.values.model}
            marks={[
              { value: 1, label: "Model 1" },
              { value: 2, label: "Model 2" },
              { value: 3, label: "Model 3" },
              { value: 4, label: "Model 4" },
            ]}
            onChangeCommitted={(event, value) => props.changeModel(value)}
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/result")}
            >
              Predict
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
        }
  const mapStateToProps = (state) => {
    return {
      data: state.predictor,
      values: state.predictor.values,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      changeType: (loanType) => dispatch(changeLoanType(loanType)),
      changeModel: (model) => dispatch(changeModel(model)),
      onInit: (amount, term) => dispatch(getInterest(amount, term)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(withWidth()(PredictorForm)));