import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const HomeFooter = () => {
  return (
    <div>
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DesignMarket</h3>
              <p className="text-gray-400">
                Premium graphic design resources for creative professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Abstract
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Logo Templates
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Typography
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Illustrations
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-purple-400">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">
                Get updates on new designs and special offers
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-gray-900 border-gray-700 text-white rounded-r-none"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none hover:cursor-pointer">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © 2025 ANIMOC<sup>™</sup> Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
