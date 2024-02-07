import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "../src/components/Home/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

