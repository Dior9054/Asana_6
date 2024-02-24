
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from "./components/arhive/Archive";
import Create_Project from "./components/createProject/Create_Project";
import Create__Blank from "./components/create_blank/Create__Blank";
import ElemLay from "./components/elemLay/ElemLay";
import Home from "./components/Home";
import Inbox from "./components/Inbox";
import InboxMain from "./components/InboxMain";
import PortfolioMain from "./components/PortfolioMain";
import Portfolio from "./components/Portfolio";
import LogIn from "./pages/LogIn";
import Project from "./pages/Project";
import Registrate from "./pages/Registrate";
import Analitico from "./components/Analitico";
import AnaliticoMain from "./components/AnaliticoMain";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inbox" element={<Inbox />}>
            <Route index element={<InboxMain />} />
            <Route path="archive" element={<Archive />} />
          </Route>
          <Route path="portfel" element={<Portfolio />}>
            <Route index element={<PortfolioMain />} />
          </Route>
          <Route path="analitic" element={<Analitico />}>
            <Route index element={<AnaliticoMain />} />
          </Route>
          <Route path="new" element={<ElemLay />}>
            <Route index element={<Create_Project />} />
            <Route path="blank" element={<Create__Blank />} />
          </Route>
          <Route path="projects">
            <Route path=":projectId" element={<Project />} />
          </Route>
        </Route>
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  )
}