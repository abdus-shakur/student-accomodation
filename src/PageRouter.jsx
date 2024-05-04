import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header";
import RoomCards from "./pages/hotels/HotelPage";
import HomePage from "./pages/home/Homepage";
import HotelLocationPopup from "./pages/hotels/HotelMap";

export default function PageRouter() {

 const menus = [
    {
        url:"home",
        element:<HomePage/>

    },
    {
        url:"hotel",
        element:<RoomCards/>
    },
    {
        url:"map",
        element:<HotelLocationPopup/>

    }
 ]

  return (
    <>
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
    <Routes >
        <Route path={"/app/"}element={<><Header/><Outlet/><Footer/></>}>
            {menus.map(menu=>
                <Route path={menu.url} element={menu.element}>
                </Route>
            )}
        </Route>
        <Route exact path="/*" element={<><Header/><HomePage/><Footer/></>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
