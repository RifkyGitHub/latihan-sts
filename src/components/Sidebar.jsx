
import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white p-6">
      <h1 className="mb-8 text-xl font-bold">
        📚 Toko Buku
      </h1>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Beranda
        </NavLink>

        <NavLink
          to="/books"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Katalog Buku
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Koleksi Favorit
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Bantuan
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;