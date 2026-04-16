import { Link } from "react-router-dom";
import logo from "../assets/franchise.png";

const Footer = () => (
  <footer className="mt-20 bg-gray-950 text-gray-300">

    <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">

      {/* 🔥 Branding */}
      <div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="VPRINT Logo" className="h-8 w-8" />
          <h4 className="text-xl font-bold text-white">VPRINT</h4>
        </div>
        <p className="mt-3 text-sm text-gray-400">
          Smart self-service printing solution designed for speed, privacy, and convenience.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          by ZAYVION Private Limited
        </p>
      </div>

      {/* 🔗 Quick Links */}
      <div>
        <h5 className="mb-3 text-sm font-semibold text-white">Quick Links</h5>
        <div className="space-y-2 text-sm">
          <Link to="/terms" className="block hover:text-white transition">Terms of Service</Link>
          <Link to="/privacy" className="block hover:text-white transition">Privacy Policy</Link>
        </div>
      </div>

      {/* 📞 Contact */}
      <div>
        <h5 className="mb-3 text-sm font-semibold text-white">Contact Us</h5>

        <div className="space-y-2 text-sm">
          <a
            href="https://instagram.com/thevprint.co"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-white transition"
          >
            Instagram (@thevprint.co)
          </a>

          <a
            href="https://www.linkedin.com/in/jagannathgoud"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-white transition"
          >
            Linkedin @Cheguri Jagannath Goud
          </a>


          <a href="tel:8143632036" className="block hover:text-white transition">
            📞 8143632036
          </a>

          <a
            href="mailto:zayvionprivatelimited@gmail.com"
            className="block hover:text-white transition"
          >
            ✉️ zayvionprivatelimited@gmail.com
          </a>
        </div>

        {/* 🔥 CTA */}
        <a
          href="tel:8143632036"
          className="mt-4 inline-block rounded-full bg-gradient-to-r from-teal-500 to-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105"
        >
          Contact Now
        </a>
      </div>

    </div>

    {/* 🔻 Bottom */}
    <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
      © 2026 VPRINT. All rights reserved. <br />
      by ZAYVION Private Limited
    </div>

  </footer>
);

export default Footer;