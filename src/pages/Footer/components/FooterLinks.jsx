import { Box, Typography } from "@mui/material";

export default function FooterLinks(props) {
const {data} = props;
  var textstyle = {
    color: (theme) => theme.palette.text.primary,
    textAlign: "left",
  };
  
  function navigateTo(href) {
    window.location.href = "" + href;
  }
  return (
    <>
      <Box sx={{flexGrow:'1',display:'flex',flexDirection:'column',padding:'0 3rem 1.5rem 0'}}>
      <Typography variant="h6"sx={{ ...textstyle ,paddingBottom:'0.5rem'}}>{data.heading}</Typography>
      {data.links.map((link) => (
        <Box>
          <Typography
            sx={{ ...textstyle ,paddingBottom:'0.3rem'}}
            onClick={() => navigateTo(link.url)}
        
          >
            {link.name}
          </Typography>
        </Box>
      ))}
      </Box>
    </>
  );
}
