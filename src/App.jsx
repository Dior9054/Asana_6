import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "../src/components/Home/Home"
import Messeges from "../src/components/my__messeges/Messeges"
import Inbox from "../src/components/inbox/Inbox"
import MyTask from "../src/components/mytask/MyTask"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="mytask" element={<MyTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;