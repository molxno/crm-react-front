import { Outlet, NavLink, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-slate-900 px-5 py-10 flex flex-col justify-between">
        <nav className="text-center">
          <NavLink
            to="/"
            className="block mx-auto text-white text-5xl font-bold mb-10 hover:text-slate-400"
          >
            CRM
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/clientes"
                ? "text-slate-400 underline transition-colors"
                : "text-white"
            } rounded-md text-2xl block mt-2 hover:text-slate-400`}
            to="/clientes"
          >
            Clientes
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-slate-400 underline transition-colors"
                : "text-white"
            } rounded-md text-2xl block mt-2 hover:text-slate-400`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </NavLink>
        </nav>
        <div className="text-center">
          <p className="text-sm text-gray-400">&copy; molxno.dev</p>
          <p className="text-sm text-gray-400">
            Property of a Backend Magician.
          </p>
          <p className="text-sm text-gray-400">Made with ❤️</p>
        </div>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-x-hidden overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
