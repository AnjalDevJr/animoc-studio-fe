import { ShoppingCart, Search, Heart } from "lucide-react";
import { Input } from "../ui/input";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div>
      <header className="border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-white">
            ANIMOC<sup>™</sup> Studio
          </NavLink>

          <div className="relative w-1/3">
            <Input
              placeholder="Search designs..."
              className="bg-gray-900 border-gray-700 text-white pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          <div className="flex items-center gap-4">
            <NavLink
              to="/likes"
              className="text-gray-300 hover:text-white p-2 rounded-md inline-flex items-center justify-center"
            >
              <Heart className="h-5 w-5" />
            </NavLink>
            <NavLink
              to="/cart"
              className="text-gray-300 hover:text-white p-2 rounded-md inline-flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5" />
            </NavLink>
            <NavLink
              to="/login"
              className="ml-4 bg-transparent border border-purple-600 text-purple-400 hover:bg-purple-900 hover:text-purple-200 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              className="bg-purple-600 text-white hover:bg-purple-700 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
