import { Box } from "@mui/material";
import HotelCard from "./HotelCard";

export default function RoomCards(){

    var hotelData = [
        {
            name:"North Lodge Unite",
            imageUrl:"https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address:'Lebus Street, Tottenham, London, N17 9FQ',
            travelMetrics:'30 mins by public transport to Central London',
            policies:['En-Suite','No Visa No Pay'],
            additions:['PBSA','Accesibility'],
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
            name:"Ciudad Maderas",
            imageUrl:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address:'312 Goswell Road, Islington, London, EC1V 7AG',
            travelMetrics:'28 mins by public transport to Central London',
        },
        {
            name:"Vita Lewisham Exchange",
            imageUrl:"https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address:'Exchange Point, Loampit Vale, London, SE13 7N',
            travelMetrics:'27 mins by public transport to Central London'
        },
    ]
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
    return <>
    <Box sx={{padding:'2rem',display:'flex',flexDirection:'row',gap:'3rem',flexWrap:'wrap',}}>
        {hotelData.map(dat=><HotelCard data={dat}/>)}
    </Box>
    </>
}