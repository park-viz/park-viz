import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ReactPlayer from "react-player";
import InfoIcon from "@material-ui/icons/Info";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 225,
  },
}));

export default function TestDetails(props) {
  const id = props.sendId;
  const data = props.sendData;
  console.log(id);
  console.log(data);

  const classes = useStyles();
  const theme = useTheme();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            {/* Chart */}
            <Grid item xs={7}>
              <Paper>
                <ReactPlayer
                  width={"100%"}
                  style={{ padding: "12px" }}
                  url="https://www.youtube.com/watch?v=cRLB7WqX0fU"
                />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={5}>
              <Paper style={{ padding: "12px", height: "100%" }}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "12px",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                    style={{ marginBottom: "-6px" }}
                  >
                    Intepreting your results
                  </Typography>

                  <Divider />
                </Box>

                <Typography>
                  Parkinson's disease targets the nervous system. As a result, individuals with Parkinson's disease may have greater difficulty in controlling their facial movements.</Typography>
                <br />
                <Typography>
                  This test measured the intensity of different muscle groups in your face as you tightened them.
                </Typography>
                <br />
                <Typography>
                  The facial muscle intensity chart illustrates your facial muscle groups, and plots the intensity with which you can control them.
                  <b> Individuals with Parkinson's disease may find that they have steeper slopes due to their degraded control over their nervous system.</b>
                </Typography>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}></Box>
        </Container>
      </main>
    </div>
  );
}