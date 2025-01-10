"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Phone, MapPin, Menu } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 flex justify-end">
        <div className="bg-gray-200 rounded-bl-lg rounded-br-lg px-8 py-2.5 mr-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-gray-600" />
              <span className="text-sm text-gray-600">
                Resolve Enterprises: 9993183065
              </span>
            </div>
            <Link
              href="/brochure"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Download Brochure
            </Link>
            <Link
              href="/locate"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Locate Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="w-full bg-white shadow-sm">
    //   <div className="container mx-auto px-4">
    //     <div className="flex justify-between items-center h-20">
    //       {/* Logo */}
    //       <Link href="/" className="flex items-center">
    //         {/* <img
    //           src="/parryware-logo.png"
    //           alt="Parryware Logo"
    //           className="h-12"
    //         /> */}
    //       </Link>

    //       {/* Desktop Navigation */}
    //       <div className="hidden md:flex items-center space-x-8">
    //         {/* Search Bar */}
    //         <div className="relative">
    //           <input
    //             type="text"
    //             placeholder="Search Products"
    //             className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //           <Search
    //             className="absolute right-3 top-2.5 text-gray-400"
    //             size={20}
    //           />
    //         </div>

    //         {/* Navigation Links */}
    //         <div className="flex items-center space-x-6">
    //           <div className="relative group">
    //             <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
    //               <span>Products</span>
    //               <ChevronDown size={16} />
    //             </button>
    //           </div>

    //           <div className="relative group">
    //             <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
    //               <span>About Us</span>
    //               <ChevronDown size={16} />
    //             </button>
    //           </div>

    //           <Link
    //             href="/testimonials"
    //             className="text-gray-700 hover:text-blue-600"
    //           >
    //             Testimonials
    //           </Link>

    //           <Link
    //             href="/customer-care"
    //             className="text-gray-700 hover:text-blue-600"
    //           >
    //             Customer Care
    //           </Link>

    //           <div className="relative group">
    //             <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
    //               <span>Media</span>
    //               <ChevronDown size={16} />
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Mobile menu button */}
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="md:hidden rounded-md p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
    //       >
    //         <Menu size={24} />
    //       </button>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isOpen && (
    //       <div className="md:hidden py-4">
    //         <div className="px-2 pt-2 pb-3 space-y-1">
    //           <input
    //             type="text"
    //             placeholder="Search Products"
    //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
    //           />
    //           <Link
    //             href="/products"
    //             className="block px-3 py-2 text-gray-700 hover:text-blue-600"
    //           >
    //             Products
    //           </Link>
    //           <Link
    //             href="/about"
    //             className="block px-3 py-2 text-gray-700 hover:text-blue-600"
    //           >
    //             About Us
    //           </Link>
    //           <Link
    //             href="/testimonials"
    //             className="block px-3 py-2 text-gray-700 hover:text-blue-600"
    //           >
    //             Testimonials
    //           </Link>
    //           <Link
    //             href="/customer-care"
    //             className="block px-3 py-2 text-gray-700 hover:text-blue-600"
    //           >
    //             Customer Care
    //           </Link>
    //           <Link
    //             href="/media"
    //             className="block px-3 py-2 text-gray-700 hover:text-blue-600"
    //           >
    //             Media
    //           </Link>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>
    <nav className="w-full bg-white shadow-sm">
  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center h-20 space-x-8">
      {/* Search Bar and Navigation Links */}
      <div className="flex items-center space-x-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products"
            className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <span>Products</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <span>About Us</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <Link href="/testimonials" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </Link>

          <Link href="/customer-care" className="text-gray-700 hover:text-blue-600">
            Customer Care
          </Link>

          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <span>Media</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <Link href="/" className="flex items-center">
        {/* <img
          src="/parryware-logo.png"
          alt="Parryware Logo"
          className="h-12"
        /> */}
      </Link>
    </div>

    {/* Mobile menu button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden rounded-md p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
    >
      <Menu size={24} />
    </button>

    {/* Mobile Navigation */}
    {isOpen && (
      <div className="md:hidden py-4">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <Link
            href="/products"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            href="/testimonials"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Testimonials
          </Link>
          <Link
            href="/customer-care"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Customer Care
          </Link>
          <Link
            href="/media"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Media
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

// Export combined navbar
export const Navbar = () => {
  return (
    <header>
      <TopNavbar />
      <MainNavbar />
    </header>
  );
};

export default Navbar;
