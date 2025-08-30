import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import Footer from "../Footer"
const mainLayout = () => {
return (
    <>
    <>
    <NavBar />
    <Outlet />
    </>
    </>
)
}

export default mainLayout
