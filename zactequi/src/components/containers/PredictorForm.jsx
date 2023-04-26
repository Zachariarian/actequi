import React, { useEffect } from "react";
import {
  withStyles,
  withWidth,
  Grid,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { changeLoanType, changeModel, getInterest } from "../actions/PredictorAction";
import SliderControl from "../SliderControl";
import CircularGraph from "../CircularGraph";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  toggleButtonGroup: {
    margin: `${theme.spacing(1)}px 0 ${theme.spacing(3)}px 0`,
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(1),
  },
});

function PredictorForm(props) {
  const { classes, theme, onInit, values, changeType, changeModel, history } = props;

  useEffect(() => {
    const { amount, term } = values;
    onInit(amount, term);
  }, [onInit, values]);

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        Loan Predictor
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className={classes.toggleButtonGroup}>
            <ToggleButtonGroup
              value={values.loanType.type}
              exclusive
              onChange={(event, value) => changeType(value)}
            >
              {props.data.map((loanType) => (
                <ToggleButton key={loanType.type} value={loanType.type}>
                  {loanType.icon}
                  {loanType.title}
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
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
          <Typography variant="h6" className={classes.label}>
            {values.loanType.title}
          </Typography>
          <SliderControl
            min={1}
            max={4}
            step={1}
            defaultValue={values.model}
            marks={[
              { value: 1, label: "Model 1" },
              { value: 2, label: "Model 2" },
              { value: 3, label: "Model 3" },
              { value: 4, label: "Model 4" },
            ]}
            onChangeCommitted={(event, value) => changeModel(value)}
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/result")}
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
