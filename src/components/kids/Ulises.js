import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: "50px"
  }
});

class Ulises extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display2" gutterBottom>
          Hello, this is Ulises's page!
        </Typography>
        <img src="/assets/shoes_repo/png/059-shoe-1.png" />
      </div>
    );
  };
}
Ulises.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ulises);
