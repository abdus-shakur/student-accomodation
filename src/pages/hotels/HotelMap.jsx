import { Box, Button, Paper, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './map.scss'
import 'leaflet/dist/leaflet.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

function HotelMarker(props){
    const {data} = props;
    var lat = data?.location?.lat;
    var lng = data?.location?.lng;
    if(!lat){
        lat = 51.505;
    }

    if(!lng){
        lng = -0.09;
    }

    function launchGoogleMapDirection(lat,lng){
      let googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      window.open(googleMapUrl, '_blank', 'toolbar=0,location=1,menubar=0');
    }

    return <>
        <Marker position={[lat, lng]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>
            <Box sx={{display:'flex',flexDirection:'row',gap:'1rem'}}>
            <Box>
                <img src={data.imageUrl} style={{width:'90px',height:'100%',objectFit: 'cover',borderRadius:'0.5rem'}}></img>
            </Box>
            <Box >
                <Typography sx={{fontWeight:'700'}}>{data.name}</Typography>
                <Typography sx={{fontSize:'0.8rem'}}>{data.address}</Typography>
                <Button variant="contained" color="success"onClick={()=>launchGoogleMapDirection(lat,lng)}>Drive to Location</Button>
            </Box>
            <Box>
              
            </Box>
            </Box>
            </Popup>
        </Marker>
    </>
}

export default function HotelLocationPopup(props){

    var {lat,lng,data,complete} = props;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    

    return <><Paper sx={style} elevation={10}>
    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
      Hotel Location Details
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    </Typography>
    <div>
    <MapContainer  center={[lat, lng]} zoom={8} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <HotelMarker data={data}/>
    {complete.map(comp=><HotelMarker data={comp}/>)}
  </MapContainer>
  </div>
  </Paper></>
}

