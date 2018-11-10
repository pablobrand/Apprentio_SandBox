import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: 50,
    backgroundColor: "gold"
  },
  textColor: {
    color: "red"
  }
});

class Caleb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display2" gutterBottom className={classes.root}>
          >Hello, this is Caleb!
        </Typography>
        <img src="/assets/shoes_repo/png/059-shoe-1.png" />
      </div>
    );
  };
}

Caleb.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Caleb);
