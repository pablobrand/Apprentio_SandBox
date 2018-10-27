import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: 50,
    backgroundColor: 'blue',
  },
  textColor: {
    color: 'silver'
  },
});

function Alex(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom className={classes.textColor}>What Up, its Alex Aka (SweetTea)</Typography>
      <img src="/assets/shoes_repo/png/059-shoe-1.png"/>
    </div>
  );
}

Alex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Alex);