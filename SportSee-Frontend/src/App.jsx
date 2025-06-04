import SideNav from "./layouts/SideNav";
import TopNav from "./layouts/TopNav";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <TopNav />
      <SideNav />
      <AppRoutes />
    </>
  );
}

export default App;
