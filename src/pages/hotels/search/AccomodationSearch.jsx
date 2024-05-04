import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
 export default function AccomodationSearch(){
    return <>
    <Box sx={{padding:'1rem'}}>
        <Typography></Typography>
        
     <FormControl>
      <FormLabel sx={{marginBottom:'1rem'}}id="demo-radio-buttons-group-label">Accommodation Type</FormLabel>
      <Divider/>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="student" control={<Radio />} label="Student Accommodation" />
        <Typography sx={{paddingLeft:'2rem'}}>Purpose built student rooms with onsite teams, facilities and community.</Typography>
        <FormControlLabel value="private" control={<Radio />} label="Private Let" />
        <Typography sx={{paddingLeft:'2rem'}}>Private or shared living in a house or apartment.</Typography>
        <FormControlLabel value="working" control={<Radio />} label="Young or Working Professional Housing" />
        <Typography sx={{paddingLeft:'2rem'}}> Co-Living, serviced apartments, hotels etc.</Typography>
        <FormControlLabel value="homestay" control={<Radio />} label="Homestays" />
        <Typography sx={{paddingLeft:'2rem'}}>Stay with a Local Family for an affordable fee.</Typography>
      </RadioGroup>
    </FormControl>
    </Box>
    </>
}