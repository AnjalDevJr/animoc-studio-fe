import { Home, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center justify-center px-4 relative">
      {/* Logo */}
      <div className="mb-8">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <span className="bg-purple-600 text-white p-1 rounded">DM</span>
          DesignMarket
        </NavLink>
      </div>

      {/* 404 Graphic */}
      <div className="relative mb-8">
        <div className="text-[10vw] font-bold text-gray-900 leading-none select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            404
          </div>
        </div>
      </div>

      {/* Message */}
      <h1 className="text-3xl font-bold mb-2 text-center">Page Not Found</h1>
      <p className="text-gray-400 text-center max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved to another
        URL.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <NavLink
          to="/"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
        >
          <Home className="h-5 w-5" />
          Back to Home
        </NavLink>
        <button
          onClick={() => window.history.back()}
          className="border border-gray-700 hover:border-purple-500 hover:text-purple-400 px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Go Back
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-purple-600"></div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[30vw] h-[30vw] bg-purple-900 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[30vw] h-[30vw] bg-purple-900 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
}
