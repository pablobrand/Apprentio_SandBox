import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: '50px'
  },
  pageContainer: {
    maxWidth: 800,
    margin: 'auto',  // center container in the page
  },
  cell: {
    padding: 25
  },
  image: {
    width: '350px'
  },
  button: {
    margin: 16,
    width: 200
  }
});
class ImageChangedByButtonDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 'https://loveincorporated.blob.core.windows.net/contentimages/fullsize/3f754252-dd5b-42b7-b6ca-7c9dd0209a92-lisbon-portugal-skyline.jpg'
    }
  }
  handleButton1Click = (e) => {
    this.setState({ selectedImage: 'https://loveincorporated.blob.core.windows.net/contentimages/fullsize/3f754252-dd5b-42b7-b6ca-7c9dd0209a92-lisbon-portugal-skyline.jpg' });
  }
  handleButton2Click = (e) => {
    this.setState({ selectedImage: 'https://www.telegraph.co.uk/content/dam/football/2018/04/03/TELEMMGLPICT000159361366_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg?imwidth=450' });
  }
  handleButton3Click = (e) => {
    this.setState({ selectedImage: 'http://www.pescanova.pt/content/img/PN_Bacalhau_Lagareiro-1_utili.jpg' });
  }
  render = () => {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <div className={classes.root}>
        <Paper className={classes.pageContainer}>
          <Grid container >
            <Grid item xs={6} className={classes.cell}>
              <img src={this.state.selectedImage} alt="" className={classes.image} />
            </Grid>
            <Grid item xs={6} className={classes.cell}>
              <Typography variant="caption" gutterBottom>Please select one button</Typography>
              <Button variant="raised" className={classes.button} onClick={this.handleButton1Click}>My City</Button>
              <br />
              <Button variant="raised" className={classes.button} onClick={this.handleButton2Click}>My Favorite Sport</Button>
              <br />
              <Button variant="raised" className={classes.button} onClick={this.handleButton3Click}>My Favorite Food</Button>
            </Grid>
          </Grid>
        </Paper>
      </div >
    );
  }

}
ImageChangedByButtonDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageChangedByButtonDemo);