import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: 50
  },
});

function Pablo(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom>Hello, this is Pablo!</Typography>
    </div>
  );
}

Pablo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pablo);