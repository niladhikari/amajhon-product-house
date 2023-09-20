import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex m-5 gap-5 ">
      <div className="w-[20%] bg-green-300 rounded-lg text-xl font-semibold p-4">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/editProfile">Edit Profile</Link>
          </li>
        </ul>
      </div>

      <div className="w-[80%] text-center font-bold text-red-400 text-2xl">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
