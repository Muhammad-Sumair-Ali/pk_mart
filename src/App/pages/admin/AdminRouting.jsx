import { Outlet, useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const AdminRouting = () => {
//   const navigate = useNavigate();
// //   const [auth] = useAuth();

//   // auth token &&
//   const fetchingCurrentUser = async () => {
//     try {
//       await axios.get(`${authApi}/current-admin`);
//     } catch (error) {
//       console.log("Admin error",error);
//       navigate("/");
//     }
//   };

//   useEffect(() => {
//     if (auth?.token) fetchingCurrentUser();
//   }, [auth && auth?.token]);

  return (
    <AdminLayout>
      {/* Render nested routes here */}
      <Outlet />
    </AdminLayout>
  );
};

export default AdminRouting;