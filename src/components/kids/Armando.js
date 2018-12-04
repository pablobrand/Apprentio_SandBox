import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textColor: {
    color: 'grey',
  },
  paperOne: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    background: 'grey',
    color: 'black',
    textAlign: "center",
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
  },
});

function Armando(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom className={classes.textColor}>Hello, this is Armando!</Typography>
      <img src = "/assets/shoes_repo/png/058-soccer-shoe.png"/>
      <Grid item xs={12}>
          <Paper className={classes.paperOne}>Hello World</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>How is your day going?</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>Good</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>Bad</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>Okay</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>Alright</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperOne}>No Comment</Paper>
        </Grid>
    </div>
  );
}

Armando.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Armando);