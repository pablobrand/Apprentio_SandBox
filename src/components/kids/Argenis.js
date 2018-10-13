import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: 50
  },
  root: {
    textAlign: 'center',
    padding:100
  },
  textColor: {
    color: 'red'
  },
});

function Argenis(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom>Hello, this is Argenis!</Typography>
      <img src = "/assets/shoes_repo/png/059-shoe-1.png" />
    </div>
  );
}

Argenis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Argenis);