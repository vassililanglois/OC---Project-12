import { Routes, Route } from "react-router-dom";
import SideNav from "./layouts/SideNav";
import TopNav from "./layouts/TopNav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <TopNav />
      <SideNav />
      <Routes>
        <Route path="/user/:id" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
