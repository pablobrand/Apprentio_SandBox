import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: 50,
    backgroundColor: 'green',
  },
  textColor: {
    color: 'green'
  },
});
function Argenis(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom>Whats diddly doin, this is Argenis!</Typography>
      <img src = "/assets/shoes_repo/png/055-sneaker.png" />
      <img scr = "/assets/apprentio_logo.png" />     
    </div>
  );
}

Argenis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Argenis);