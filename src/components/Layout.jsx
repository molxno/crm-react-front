import { Outlet, NavLink, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-gray-900 px-5 py-10 flex flex-col justify-between relative overflow-hidden">
        {/* Fondo con imagen semitransparente */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.vexels.com/content/241423/preview/flying-wizard-character-fb964d.png')",
          }}
        ></div>

        {/* Contenido del aside */}
        <nav className="text-center relative z-10">
          <NavLink
            to="/"
            className="block mx-auto text-white text-5xl font-bold mb-10 hover:text-gray-400"
          >
            CRM
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/clientes"
                ? "text-gray-400 underline transition-colors"
                : "text-white"
            } rounded-md text-2xl block mt-2 hover:text-gray-400`}
            to="/clientes"
          >
            Clientes
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-gray-400 underline transition-colors"
                : "text-white"
            } rounded-md text-2xl block mt-2 hover:text-gray-400`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </NavLink>
        </nav>

        <div className="text-center p-8 relative z-10">
          <p className="text-sm text-white">&copy; molxno.dev</p>
          <p className="text-sm text-white">Property of a Backend wizard.</p>
          <p className="text-sm text-white">Made with ❤️</p>
        </div>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-x-hidden overflow-y-scroll">
        <Outlet />
      </main>
      ø
    </div>
  );
}

export default Layout;
