import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
import Asside from "../asside/Asside";


function Layout() {
    return (
        <>
            <Header />
            <main>
                <Asside />
                <Outlet />
            </main>
        </>
    );
}

export default Layout;

