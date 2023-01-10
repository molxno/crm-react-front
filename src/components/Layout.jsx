import { Outlet, NavLink, useLocation } from "react-router-dom"

function Layout() {
    const location = useLocation()
  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-slate-900 px-5 py-10">
            <h2 className="text-center text-4xl font-bold text-white">CRM - Clientes</h2>
            <nav className="mt-10 text-center">
                <NavLink className={`${location.pathname === "/clientes" ? "text-slate-400 underline transition-colors" : "text-white"} rounded-md text-2xl block mt-2 hover:text-slate-400`} to="/clientes">Clientes</NavLink>
                <NavLink className={`${location.pathname === "/clientes/nuevo" ? "text-slate-400 underline transition-colors" : "text-white"} rounded-md text-2xl block mt-2 hover:text-slate-400`} to="/clientes/nuevo">Nuevo Cliente</NavLink>
            </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout