import { Box, Breadcrumbs, Button, Divider, Icon, Pagination, Popover, Typography } from "@mui/material";
import HotelCard from "./HotelCard";
import HotelNavBreadCrumb from "./HotelNavBreadCrumb";
import { Business } from "@mui/icons-material";
import {hotelData} from './hotelData';
import { useState } from "react";
import AccomodationSearch from "./search/AccomodationSearch";
import RoomTypeSearch from "./search/RoomTypeSearch";

export default function RoomCards(){

    
    var roomData =[
        {
            name:"North Lodge Unite",
            imageUrl:"https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address:'Lebus Street, Tottenham, London, N17 9FQ',
            travelMetrics:'',
            types:[''],
            priceDetails:{
                duration:'Week',
                price:'250',
                symbol:'£'
            },
            ratingDetail:{
                rating:7,
                max: 10
            },
            city:'London'
            
        },
        {
            name:"",
            imageUrl:"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"",
            imageUrl:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"",
            imageUrl:"https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"",
            imageUrl:"https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"",
            imageUrl:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"",
            imageUrl:"https://plus.unsplash.com/premium_photo-1687995673398-bf3e55667dc5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
    ]

    
  var textstyle  = {color:(theme)=>theme.palette.text.primary};

  const [currentPage , setCurrentPage] = useState(1);
  function setPage(event,value){
    console.log('set Page : '+value)
    setCurrentPage(value);
  }

//   const [showPopover,setShowPopOver] = useState(true);
  const [popoverAnchor,setPopOverAnchor] = useState(null);
  const [popContent,setPopContent] = useState(<></>);
  var popoverContent = 
    {
        accomodation:<AccomodationSearch/>,
        roomType:<RoomTypeSearch type="room"/>,
        facilities:<RoomTypeSearch type="facilities"/>
    }
  

  const handleClick = (event) => {
    setPopContent(popoverContent[event.target.name])
    setPopOverAnchor(event.currentTarget);
  };

    return <>
    <Box sx={{backgroundColor:(theme)=>theme.palette.background.default,padding:'1rem'}}>
    <Divider/>
    <HotelNavBreadCrumb/>
    <Divider/>
    <Box sx ={{paddingTop:'1.5rem',paddingBottom:'1.5rem'}}>
        <Icon sx={{padding:'0 1.5rem',marginRight:'1rem'}}>
            <Business sx={{transform: 'scale(1.2)'}} color="primary"  ></Business>
        </Icon>
    <Typography sx={{...textstyle,display:'inline'}} variant="h5">Student Accommodation</Typography>
    <Typography sx={{color:(theme)=>theme.palette.primary.main,display:'inline',marginLeft:'0.5rem',fontWeight:'500'}} variant="h5" color="primary">London</Typography>
    {/* <Typography sx={{...textstyle,marginLeft:'0.5rem'}} variant="h5">{'(251) Options'}</Typography> */}
    </Box>
    <Divider/>
    <Box sx={{display:'flex',gap:'0.5rem',marginTop:'1rem'}}>
        <Button name="accomodation" onMouseEnter={handleClick}  variant="outlined">Accomodation Type</Button>
        <Button name="roomType" onMouseOver={handleClick} variant="outlined">Room Type</Button>
        <Button name="accomodation" onMouseOver={handleClick} variant="outlined">Availability</Button>
        <Button name="accomodation" onMouseOver={handleClick} variant="outlined">Weekly Budget</Button>
        <Button name="facilities" onMouseOver={handleClick} variant="outlined">Facilities</Button>
        <Button name="accomodation" onMouseOver={handleClick} variant="outlined">Cancellation Policy</Button>
    </Box>
    <HotelPagination count={10} page={currentPage} setPage={setPage}/>
    <Box sx={{padding:'2rem',display:'flex',flexDirection:'row',gap:'3rem',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        {hotelData.map(dat=><HotelCard complete={hotelData} data={dat}/>)}
    </Box>
    <HotelPagination count={10} page={currentPage} setPage={setPage}/>
    <Popover anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} anchorEl={popoverAnchor}  disableRestoreFocus
        //  onMouseLeave={()=>setPopOverAnchor(null)} 
         open={Boolean(popoverAnchor)} onClose={()=>setPopOverAnchor(null)}>
            {popContent}
    </Popover>
    </Box>
    </>
}

function HotelPagination(props){
    const {page,setPage,count} = props;
    const [pageNumber,setPageNumber] = useState(page);

    return <Box sx={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
    <Pagination count={count} variant="outlined" shape="rounded" size="large" showFirstButton showLastButton
    page={pageNumber} onChange={(event,value)=>{setPageNumber(value);props.setPage(event,value);}}/>
    </Box>;
}