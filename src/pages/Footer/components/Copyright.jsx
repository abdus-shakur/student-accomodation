import { Box, Divider, Typography } from "@mui/material";

export default function Copyright(){
    var textstyle  = {color:(theme)=>theme.palette.text.primary};
    return <>
    <Divider sx={{borderWidth:'1px'}}/>
    <Box className='footer-copyright' sx={{display:'flex'}}>
        
        <Box className='copyright-text'>
            <Typography sx={{...textstyle}} variant="body" className="text" >Copyright © 2024 Xoztel</Typography>
        </Box>
        {/* <Box > */}
            <Box><Typography sx={{...textstyle,paddingRight:'2rem'}} variant="body">Terms of Use</Typography></Box>
            <Box><Typography sx={{...textstyle}} variant="body" className="text">Privacy Policy</Typography></Box>
        {/* </Box> */}
    </Box>
    </>
}