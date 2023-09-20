import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <section className="py-5 shadow-lg flex justify-between px-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">AmaJhon</h2>
        </div>
        <nav className="">
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400" : ""
                }
              >Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400" : ""
                }
              >Products
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-400" : ""
                }
              >Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
