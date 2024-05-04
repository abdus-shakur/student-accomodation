import { Box, Divider, Typography } from "@mui/material";
import Copyright from "./components/Copyright";
import "./footer.scss";
import { HorizontalRule } from "@mui/icons-material";
import FooterLinks from "./components/FooterLinks";
import SocialMediaInfo from "./components/SocialMediaInfo";

export default function Footer() {
    var data = [
        {
            heading : "UK",
            links : [
                { name: "London", url: "/London" },
                { name: "Birmingham", url: "/Birmingham" },
                { name: "Glasgow", url: "/Glasgow" },
                { name: "Liverpool", url: "/Liverpool" },
                { name: "Edinburgh", url: "/Edinburgh" },
                { name: "Manchester", url: "/Edinburgh" },
              ]
        },
        {
            heading : "Australia",
            links : [
                { name: "Sydney", url: "/London" },
                { name: "Sydney", url: "/Birmingham" },
                { name: "Glasgow", url: "/Glasgow" },
                { name: "Liverpool", url: "/Liverpool" },
                { name: "Edinburgh", url: "/Edinburgh" },
                { name: "Manchester", url: "/Edinburgh" },
              ]
        },
        {
            heading : "USA",
            links : [
                { name: "New York", url: "/London" },
                { name: "Los Angeles", url: "/Birmingham" },
                { name: "Glasgow", url: "/Glasgow" },
                { name: "Liverpool", url: "/Liverpool" },
                { name: "Edinburgh", url: "/Edinburgh" },
                { name: "Manchester", url: "/Edinburgh" },
              ]
        },
        {
            heading : "Canada",
            links : [
                { name: "Sydney", url: "/London" },
                { name: "Sydney", url: "/Birmingham" },
                { name: "Glasgow", url: "/Glasgow" },
                { name: "Liverpool", url: "/Liverpool" },
                { name: "Edinburgh", url: "/Edinburgh" },
                { name: "Manchester", url: "/Edinburgh" },
              ]
        },
        {
            heading : "Useful Links",
            links : [
                { name: "About Us", url: "/London" },
                { name: "Privacy Policy", url: "/Birmingham" },
                { name: "Terms of Use", url: "/Glasgow" },
                { name: "FAQs", url: "/Liverpool" },
                { name: "Careers", url: "/Edinburgh" },
                { name: "Arrival Services", url: "/Edinburgh" },
              ]
        }
      ]
  var textstyle = { color: (theme) => theme.palette.text.primary };
  return (
    <>
      <Divider></Divider>
      <Box
        className="footer"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          padding: "1rem",
        }}
      >
        <Box sx={{ padding: "1rem",
        display:'flex',flexDirection:'row',flexWrap:'wrap' }}>
            {data.map(dat=><FooterLinks data={dat}/>)}
            <SocialMediaInfo/>
        </Box>
        <Divider variant="middle" role="presentation"></Divider>
        <Box sx={{ padding: "1rem" }}>
          <Typography sx={{ ...textstyle }} variant="body" className="content">
            Xoztel is a student accommodation marketplace offering more than 1
            million comfortable student rooms in 60+ countries and 400+ cities
            across the world. We have partnered with leading student home
            providers that meet our student accommodation standards to offer you
            only the best options. With over two decades of experience, we take
            pride in helping thousands of students find their dream home abroad,
            making their foreign education experience easy-peasy.
          </Typography>
        </Box>
        <Copyright />
      </Box>
    </>
  );
}
