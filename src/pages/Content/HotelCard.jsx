import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccessTime, Directions as DirectionsIcon} from '@mui/icons-material';
import { Box, Button, ButtonGroup, Chip, Icon } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HotelCard(props) {
    const {data} = props;
    const {imageUrl,city,name,address} = data;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(data);
  console.log(imageUrl);

  return (
    <Card sx={{ maxWidth: 345 }} elevation={6}>
      <CardHeader
        avatar={
          <Avatar title={city} sx={{ bgcolor: red[500] }} aria-label="recipe">
            {city?.substring(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={address}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        {data.travelMetrics?
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'flex-end',gap:'0.4rem'}}>
          {/* <Icon> */}
          <AccessTime ></AccessTime>
          {/* </Icon> */}
        <Typography variant="body2" color="text.secondary">
          {data.travelMetrics}
        </Typography>
        </Box>:<></>}
        {data.policies?
        <Box sx={{display:'flex',flexWrap:'wrap',gap:'0.5rem',padding:'0.25rem',marginTop:'0.2rem'}}>
        {data.policies.map(policy=><Chip size="small" label={policy}></Chip>)}
        {data?.additions.map(addition=><Chip size="small" label={addition} variant="filled"></Chip>)}
        </Box>
        :<></>}
        {data.priceDetails?
        <Box sx={{padding:'0.25rem'}}>
          From <Typography variant='p'>{data.priceDetails?.symbol}{data.priceDetails?.price}</Typography>
          {`/ ${data.priceDetails?.duration}`}
          </Box>
        :<></>}
        
      </CardContent>
      <CardActions disableSpacing sx={{gap:'1.5rem'}} >
        {/* <ButtonGroup > */}
      <Button variant="contained"  color="secondary">View Rooms</Button>
        <Button variant="contained" color="success">Quick View</Button>
        <IconButton aria-label="share">
          <DirectionsIcon />
        </IconButton>
        
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
