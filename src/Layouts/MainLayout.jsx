import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <section className="py-5 shadow-lg flex justify-between px-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">AmaJhon</h2>
        </div>
        <nav className="">
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Product</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
