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

function Marcus(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom>Hello, this is Marcus!</Typography>
    </div>
  );
}

Marcus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Marcus);