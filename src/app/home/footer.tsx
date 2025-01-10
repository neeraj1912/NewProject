"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white mt-0 py-12 px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-4xl font-semibold text-white">
                  <span className="text-slate-400">RESOLVE ENTERPRISES</span>
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  Crafting Quality For Every Bathroom
                </p>
              </div>
            </div>

            <p className="text-gray-300 max-w-md">
              &quot;Delivering high-quality steel sinks and hardware accessories with innovation and reliability. Your trust, our commitment.&quot;
            </p>
            <div className="flex space-x-4 pt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={28} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram size={28} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter size={28} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={28} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
              Contact Info
            </h4>
            <div className="text-gray-300 space-y-3">
              <p>
                <span className="font-semibold text-white">Address:</span>
                <br />
                Resolve Enterprises
                <br />
                Bamankhera, Dewas (455001)
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>
                <br />
                +91 9993183065
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>
                <br />
                nc28778@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Resolve Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
