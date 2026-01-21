import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-32 text-sm">

        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Cure Connect Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to Cure Connect, an innovative digital platform transforming
            how patients access and manage healthcare.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Link to="/" className="hover:text-black">Home</Link>
            </li>
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Link to="/about" className="hover:text-black">About Us</Link>
            </li>
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Link to="/contact" className="hover:text-black">Contact Us</Link>
            </li>
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Link to="/privacy-policy" className="hover:text-black">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="tel:+917338147963" className="hover:text-black">+91 7338147963</a></li>
            <li><a href="mailto:ashvithaamca2024@gmail.com" className="hover:text-black">cureconnect@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <hr />
      <p className="py-5 text-sm text-center">
        Copyright © 2025 Cure Connect - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
