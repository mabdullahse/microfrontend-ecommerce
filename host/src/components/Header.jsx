import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-lg font-bold">
          <a href="#" className="hover:text-gray-400">
            MyLogo
          </a>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        <div className="hidden md:block relative">
          <MiniCart />
          <Login />
        </div>

        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden">
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
