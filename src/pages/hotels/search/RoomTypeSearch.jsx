import { CheckBox, Close } from "@mui/icons-material";
import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Typography } from "@mui/material";
 export default function RoomTypeSearch(prop){
  const {type} = prop;

  var roomTypes = {
    room: {
      title:'Room Type',
      height:'12rem',
      data:["Single","Double","En-Suite","Entire Place","Flat","Penthouse","Quadruple","Shared Flat","Shared Room","Studio","Triple","Twin"]
    },
    facilities: {
      title:'Facilities',
      height:'20rem',
      data:[
      "24/7 Security + CCTV","Accessibility","Advice","Air Conditioning","Bed and Breakfast","Bills Included","Catering","Central Heating","Cleaning Service","Communal Games Room","Communal Kitchen","Emergency","Family Friendly - T&C Applied","Flexible Start Dates","Fully-Furnished","Insurance","Laundry","On-Site Cinema Room","On-Site Gym","On-Site Maintenance","On-Site Management","Parking","Pet Friendly","Secure Bike Storage","Secure Rooms","Social Area","Storage Space","Study Rooms","Swimming Pool","Under 18","Vending Machine","Wi-Fi"
      ]
    }
  }

    return <>
    <Box sx={{padding:'1rem',display:'flex',flexWrap:'wrap'}}>
        <Typography></Typography>
        <Box sx={{position:'absolute',right:'0.25rem',top:'0.25rem'}}>
        <IconButton>
        <Close></Close>
        </IconButton>
        </Box>
        
     <FormControl>
      <FormLabel sx={{marginBottom:'1rem'}}id="demo-radio-buttons-group-label">{roomTypes[type].title}</FormLabel>
      <Divider/>
      <Box sx={{display:'flex',flexWrap:'wrap',flexDirection:'column',height:roomTypes[type].height,}}>
      {roomTypes[type].data.map(type=><FormControlLabel control={<Checkbox defaultChecked />} label={type} />)}
      </Box>
    </FormControl>
    </Box>
    </>
}