import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/layout/Layout";
import LogIn from "./pages/logIn/LogIn";
import Registrate from "./pages/registrate/Registrate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  )
}
















// import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Layout from "./components/layout/Layout";
// import Home from "../src/components/Home/Home"
// // import Messeges from "../src/components/my__messeges/Messeges"
// import Inbox from "../src/components/inbox/Inbox"
// import InboxMain from "./components/inbox__main/inboxMain";
// import Archive from "./components/arhive/Archive";
// import Create_Project from "./components/createProject/Create_Project";
// import ElemLay from "./components/elemLay/ElemLay";
// import Create__Blank from "./components/create_blank/Create__Blank";
// import Registrate from "./pages/registrate/Registrate";

// import Reporting from "./components/reporting/Reporting";
// import Portfel from "./components/portfel/Portfel";
// import Goal from "./components/goal/Goal";
// // import CreatAccount from "./components/registr/CreatAccount";
// import LogIn from "./pages/logIn/LogIn";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/account" element={<CreatAccount />} /> */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />

//           <Route path="/inbox" element={<Inbox />}>
//             <Route index element={<InboxMain />} />
//             <Route path="/inbox/main" element={<Archive />} />
//           </Route>

//           {/* <Route path="/" element={<Layout />}> */}

//           {/* <Route index element={<Home />} /> */}

//           <Route path="/report" element={<Reporting />} />
//           <Route path="/portfel" element={<Portfel />} />
//           <Route path="/goal" element={<Goal />} />

//           {/* <Route path="/inbox" element={<Inbox />}>
//               <Route index element={<InboxMain />} />
//               <Route path="/inbox/main" element={<Archive />} />
//             </Route> */}
//           <Route path="/new" element={<ElemLay />}>
//             <Route index element={<Create_Project />} />
//             <Route path="/new/blank" element={<Create__Blank />}>
//               <Route index element={<img src="/assets/img/disk__1.png" />} />
//               <Route path="/new/blank/1" element={<img src="/assets/img/disk__2.png" />} />
//               <Route path="/new/blank/2" element={<img src="/assets/img/disk__3.png" />} />
//               <Route path="/new/blank/3" element={<img src="/assets/img/disk__4.png" />} />
//             </Route>
//           </Route>
//         </Route>
//         {/* </Route> */}
//         <Route path="/registrate" element={<Registrate />} />
//         <Route path="/login" element={<LogIn />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

