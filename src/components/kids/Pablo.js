import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { SvgLoader, SvgProxy } from "react-svgmt";
import ImgMediaCard from "../../reuseComponents/ImgMediaCard";
import Button from '@material-ui/core/Button';

const svgUrl = "../assets/kids_shoes/shoeOne.svg";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: 50,
    color: "black"
  },
  imgContainer: { 
    
  },
  button: {
    margin: theme.spacing.unit,
  }

});

class Pablo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.root} variant="display2" gutterBottom>
                My Super Page Name or Tittle
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>My quick image tittle</h2>
                <ImgMediaCard className={classes.imgContainer}/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                  This is my "Take Action Section
                </Typography>
                
                <Button variant="outlined" color="primary" className={classes.button}>
                  Primary
                </Button>

                <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
                  Link 
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
}
Pablo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pablo);
