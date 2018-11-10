import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: "50px"
  },
  joaoSneaker: {
    width: "200px"
  }
});
class Joao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display2" gutterBottom>
          Hello, this is Joao's page!
        </Typography>
        <img src="/assets/kids_shoes/joao_sneaker.svg" alt="My Sneaker" className={classes.joaoSneaker} />
        <Typography variant="caption"> This is my favorite sneaker</Typography>
      </div>
    );
  };
}
Joao.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Joao);
