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
import { Box, Button, ButtonGroup, Chip, Dialog, DialogContent, Icon, Modal, Paper } from '@mui/material';
import HotelLocationPopup from './HotelMap';

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
    const {data,complete} = props;
    const {imageUrl,city,name,address} = data;
  const [showDirections, setShowDirections] = React.useState(false);


  const toggleDirectionDetails = ()=>{
    setShowDirections(!showDirections);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
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
      <CardContent sx={{padding:'1rem',paddingBottom:'0.3rem'}}>
        {data.travelMetrics?
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'flex-end',gap:'0.4rem'}}>
          <AccessTime ></AccessTime>
        <Typography variant="body2" color="text.secondary">
          {data.travelMetrics}
        </Typography>
        </Box>:<></>}
        {data.policies?
        <Box sx={{display:'flex',flexWrap:'wrap',gap:'0.5rem',padding:'0.25rem',marginTop:'0.2rem'}}>
        {data.policies.map(policy=><Chip size="small" color="primary" label={policy}></Chip>)}
        {data?.additions.map(addition=><Chip size="small" color="warning" label={addition} variant="filled"></Chip>)}
        </Box>
        :<></>}
        {data.priceDetails?
        <Box sx={{padding:'0.25rem'}}>
          From <Typography variant='p'>{data.priceDetails?.symbol}{data.priceDetails?.price}</Typography>
          {`/ ${data.priceDetails?.duration}`}
          </Box>
        :<></>}
      </CardContent>
      <CardActions disableSpacing sx={{gap:'1.5rem',justifyContent:'center'}} >
      <Button variant="contained"  color="secondary">View Rooms</Button>
        <Button variant="contained" color="success">Quick View</Button>
        <IconButton aria-label="share" onClick={toggleDirectionDetails}>
          <DirectionsIcon/>
        </IconButton>
      </CardActions>
    </Card>
    <Modal
      open={showDirections}
      onClose={()=>toggleDirectionDetails()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <HotelLocationPopup complete={complete} data={data} lat={data?.location?.lat} lng = {data?.location?.lng}/>
    </Modal>
    </>
  );
}
