import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "../src/components/Home/Home"
import Inbox from "../src/components/inbox/Inbox"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inbox" element={<Inbox />} />
      </Route>
    </Routes>
  );
}

export default App;

