import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: 50,
    backgroundColor: "grey"
  },
  textColor: {
    color: "black"
  }
});

class Armando extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display2" gutterBottom className={classes.textColor}>
          Hello, this is Armando!
        </Typography>
        <img src="/assets/shoes_repo/png/058-soccer-shoe.png" />
      </div>
    );
  };
}
Armando.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Armando);
