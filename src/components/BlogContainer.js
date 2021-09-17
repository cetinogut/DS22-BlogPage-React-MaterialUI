import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

import { cardData } from "../dataMock/mockData";
import  BlogItemCard from './BlogItemCard';

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3)
      },
      blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
      },
      paginationContainer: {
        display: "flex",
        justifyContent: "center"
      },

      card: {
        maxWidth: "100%",
      },
      media: {
        height: 240
      },
      cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
      },
      author: {
        display: "flex"
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      
  }));

export const BlogContainer = () => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    BLOG Articles
                </Typography>
                <Grid container spacing={3}>
                    {cardData.map((singleCard,key) =>{
                        return(
                            <Grid item xs={12} sm={6} md={4} >
                               <BlogItemCard singleCardData ={singleCard}  key= {key}/>
                            </Grid>
                        );
                    })};
                </Grid>
                <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} />
                </Box>
            </Container>
        </div>
    )
}
