import SideNav from "./layouts/SideNav";
import TopNav from "./layouts/TopNav";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <TopNav />
      <SideNav />
      <Dashboard name="Thomas" />
    </>
  );
}

export default App;
