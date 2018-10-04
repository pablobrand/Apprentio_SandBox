import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: 50
  },
  svgAtr: {
    height: '100', 
    width: '100'
  },
  svgColorOne: {
    cx:"50",
    cy:"50",
    r:"40",
    stroke:"black",
    "stroke-width":"3",
     fill:"red"
  },
});

function Pablo(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={16}>
      
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.root} variant="display2" gutterBottom>Hello, this is Pablo!</Typography>
          </Paper>
        </Grid>
        <Grid item  xs={6}>
          <Paper className={classes.paper}>
          <svg className={classes.svgAtr}>
            <circle className={classes.svgColorOne}/>
          </svg>
          </Paper>
        </Grid>
        <Grid item  xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Pablo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pablo);