import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "../src/components/Home/Home"
// import Messeges from "../src/components/my__messeges/Messeges"
import Inbox from "../src/components/inbox/Inbox"
import InboxMain from "./components/inbox__main/inboxMain";
import Archive from "./components/arhive/Archive";
import Create_Project from "./components/createProject/Create_Project";
import ElemLay from "./components/elemLay/ElemLay";
import Create__Blank from "./components/create_blank/Create__Blank";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/inbox" element={<Inbox />}>
          <Route index element={<InboxMain />} />
          <Route path="/inbox/main" element={<Archive />} />
        </Route>
        <Route path="/new" element={<ElemLay />}>
          <Route index element={<Create_Project />} />
          <Route path="/new/blank" element={<Create__Blank />}>
            <Route index element={<img src="/assets/img/disk__1.png" />} />
            <Route path="/new/blank/1" element={<img src="/assets/img/disk__2.png" />} />
            <Route path="/new/blank/2" element={<img src="/assets/img/disk__3.png" />} />
            <Route path="/new/blank/3" element={<img src="/assets/img/disk__4.png" />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;