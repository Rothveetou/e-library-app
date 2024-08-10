import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyFooter from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
