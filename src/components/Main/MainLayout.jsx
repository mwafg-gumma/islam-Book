import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
const mainLayout = () => {
return (
    <>
    <NavBar />
    <Outlet />
    <section>

    </section>
    </>
)
}

export default mainLayout
