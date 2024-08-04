// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" items-center  px-16">
      <div class="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
        <p class="text-sm/6 text-slate-600 max-md:text-center">© 2024 Trippy. All rights reserved.</p>
        <div class="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end"><a href="/privacy-policy">Privacy policy</a><div class="h-4 w-px bg-slate-200"></div></div></div>     
    </footer>
  );
};

export default Footer;


