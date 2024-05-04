import { Box, Button, Card, Container, IconButton, Typography } from "@mui/material";
import "./IntroBodyFirst.scss";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function IntroBodyFirst() {
  const navigate = useNavigate();

  var textstyle  = {color:(theme)=>theme.palette.text.primary};
  return (
    <Box sx={{backgroundColor:(theme)=>theme.palette.background.default}}>
      <div className="intro-body-first">
        <Typography sx={{...textstyle}} className="text" variant="h4">
          Find Your Perfect Student Accommodation
        </Typography>
        <Typography sx={{...textstyle}} className="text" variant="h6">
          near your university!
        </Typography>
        <Button onClick={()=>navigate('/app/hotel')} className="start-button" color="secondary" variant="contained">
          Let's Start
        </Button>
        <Box component="div" sx={{display:'flex',textAlign:'left'}}>
          <CheckCircleIcon sx={{height:'3rem',width:'unset'}} color="success"></CheckCircleIcon>
          <Box>
            <Typography sx={{...textstyle, fontWeight:'bold'}}>Trusted By</Typography>
            <Typography sx={{...textstyle}}>1000+ Partners</Typography>
          </Box>
        </Box>
      </div>
    </Box>
  );
}
