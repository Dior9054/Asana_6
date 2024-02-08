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




// import { Outlet } from "react-router-dom"
// import Header from "../Header/Header";
// import Asside from "../asside/Asside";
// import { useState } from "react";
// import { useEffect } from "react";

// function Hover() {
//     const [state, setState] = useState(0)
//     useEffect(() => {
//         const handle__Target = (e) => setState(e)
//         document.addEventListener("mousemove", handle__Target)
//         removeEventListener("mousemove", handle__Target)
//     }, [])
//     return (
//         <div style={{
//             "position": "fixed",
//             "top": state.clientY + "px",
//             "left": state.clientX + "px",
//             "width": "200px",
//             "height": "200px",
//             "background": "red",
//             "borderRadius": "50%",
//             "filter": "blur(100px)",
//             "cursor": "crosshair",
//             "transform": "translate(-50%, -50%)",
//             "zIndex": "100"
//         }}>
//         </div>
//     )
// }

// function Layout() {
//     return (
//         <>
//             <Hover />
//             <Header />
//             <main>
//                 <Asside />
//                 <Outlet />
//             </main>
//         </>
//     );
// }

// export default Layout;

