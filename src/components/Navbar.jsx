import { useState } from "react";
import logo from "../assets/franchise.png"; // 🔥 your logo file

const links = [
  { label: "How It Works", target: "how-it-works" },
  { label: "Franchise", target: "franchise" },
  { label: "Process", target: "process" },
  { label: "FAQ", target: "faq" }
];

const Navbar = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* 🔥 Logo + Name */}
        <button onClick={() => onNavigate("hero")}>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="VPRINT Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-extrabold text-black tracking-wide">
              VPRINT
            </span>
          </div>
        </button>

        {/* 🔹 Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => onNavigate(link.target)}
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* 🔥 CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => onNavigate("franchise")}
            className="rounded-full bg-gradient-to-r from-teal-500 to-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105"
          >
            Get Franchise
          </button>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4">
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => {
                onNavigate(link.target);
                setOpen(false);
              }}
              className="block w-full text-left py-3 text-gray-600 hover:text-black"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              onNavigate("franchise");
              setOpen(false);
            }}
            className="mt-3 w-full rounded-full bg-gradient-to-r from-teal-500 to-orange-500 py-2 text-white font-semibold"
          >
            Get Franchise
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;