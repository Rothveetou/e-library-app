import { Outlet, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import axios from "axios";
import { useEffect } from "react";

function DashboardLayout() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:4000/auth/verify')
      .then(res => {
        if (!res.data.status) {
          navigate('/admin/dashboard'); // Correct redirection path
        }
      })
      .catch(err => {
        console.error('Error during authentication check:', err);
        navigate('/admin/dashboard'); // Redirect in case of an error
      });
  }, [navigate]);

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SidebarMenu />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
