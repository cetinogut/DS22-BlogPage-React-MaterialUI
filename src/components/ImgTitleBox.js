import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://unsplash.com/photos/EplYZrM5fEo?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/900x600')`,
        
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: 300,
          fontSize: "3em"
        }
      },
  }));

const ImgTitleBox = () => {
    const classes = useStyles();
    return (
        <div className = {classes.hero}>
            <Box>
                React Material-UI Blog
            </Box>
            
        </div>
    )
}

export default ImgTitleBox
