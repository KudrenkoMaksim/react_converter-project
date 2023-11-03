import { Outlet } from "react-router-dom"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function Layout () {
   return (
      <>
         <Header/>
         <Content/>
         <Outlet/>
         <Footer/>
      </>
   )
}
export default Layout