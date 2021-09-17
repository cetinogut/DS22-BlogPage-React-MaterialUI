import React from 'react'
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles } from '@material-ui/core/styles';
import { cardData } from "../dataMock/mockData";

const useStyles = makeStyles((theme) => ({
    
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

const BlogItemCard = ({singleCardData}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar" className={classes.avatar}>
                        {singleCardData.avatarLetter}
                        </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={singleCardData.upperTitle}
                    subheader={singleCardData.upperDate}
                />
                <CardMedia
                className={classes.media}
                image= {singleCardData.imageUrl}
                title={singleCardData.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {singleCardData.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {singleCardData.shortContent}                                
                </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                    <Avatar src={singleCardData.avatarUrl} />
                    <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                            {singleCardData.name}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {singleCardData.lowerDate}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <BookmarkBorderIcon />
                </Box>
                <Box>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                </Box>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>{singleCardData.dropdownTitle}:</Typography>
                <Typography paragraph>
                    {singleCardData.p1}
                </Typography>
                <Typography paragraph>
                    {singleCardData.p2}
                </Typography>
                <Typography paragraph>
                    {singleCardData.p3}
                </Typography>
                <Typography>
                    {singleCardData.p4}
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
                            
        </div>
    )
}

export default BlogItemCard
