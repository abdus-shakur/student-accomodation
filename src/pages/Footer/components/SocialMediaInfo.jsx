import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { Box, Button, ButtonGroup, IconButton, TextField, Typography } from "@mui/material";

export default function SocialMediaInfo() {
    var textstyle  = {color:(theme)=>theme.palette.text.primary};
    var iconSize = {fontSize:'3rem'}
  return (
    <>
      <Box sx={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
        <Typography sx={{...textstyle,paddingBottom:'0.5rem'}} variant="h6">Follow us on</Typography>
        <Box  sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingBottom:'2rem'}}>
            <IconButton>
                <Facebook sx={{...iconSize}}></Facebook>
            </IconButton>
            <IconButton>
                <Instagram sx={{...iconSize}}></Instagram>
            </IconButton>
            <IconButton>
                <Twitter sx={{...iconSize}}></Twitter>
            </IconButton>
            <IconButton>
                <LinkedIn sx={{...iconSize}}></LinkedIn>
            </IconButton>
            <IconButton>
                <YouTube sx={{...iconSize}}></YouTube>
            </IconButton>
        </Box>
        <Typography variant="h5" sx={{...textstyle,paddingBottom:'1rem'}}>Sign up to our newsletter</Typography>
        <ButtonGroup sx={{...textstyle,paddingBottom:'1rem'}}>
            <TextField sx={{width:'300px'}}placeholder="Your Email"></TextField>
            <Button variant="contained" color="secondary">Subscribe</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
