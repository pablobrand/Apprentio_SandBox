import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: 50,
    backgroundColor:'purple',
  },
  textColor: {
    color:'blue',
  },
});

function Ulises(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom>Hello, this is ya boi Ulises</Typography>
      <img src="/assets/shoes_repo/png/060-shoe.png" />
    </div >
  );
}

Ulises.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ulises);