import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import Logo from './Logo.jsx';

const nav = [
  { to: '/products', label: 'Telefoons' },
  { to: '/verkopen', label: 'Verkopen' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/klantenservice', label: 'Klantenservice' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-navy-900 text-white text-xs">
        <div className="container-x flex items-center justify-between py-2 gap-4">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-2"><Truck className="w-3.5 h-3.5 text-brand-400" /> Gratis verzending</span>
            <span className="flex items-center gap-2"><RotateCcw className="w-3.5 h-3.5 text-brand-400" /> 30 dagen retour</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-brand-400" /> 2 jaar garantie</span>
          </div>
          <span className="md:hidden flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-brand-400" /> 2 jaar garantie · 30 dagen retour</span>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline">NL · EUR</span>
            <span>Help</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container-x flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex-shrink-0"><Logo /></Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-brand-700' : 'text-slate-700 hover:text-brand-700'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className={`absolute inset-x-0 top-full bg-white border-b border-slate-200 p-4 lg:static lg:bg-transparent lg:border-0 lg:p-0 lg:flex-1 lg:max-w-md ${searchOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="search"
                placeholder="Zoek naar iPhone, Samsung, Pixel..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 border border-transparent focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-slate-100"
              aria-label="Zoeken"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/login" className="hidden sm:flex p-2 rounded-full hover:bg-slate-100" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/checkout" className="relative p-2 rounded-full hover:bg-slate-100" aria-label="Winkelwagen">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] text-[10px] font-bold rounded-full bg-gradient-to-r from-brand-600 to-cyan-600 text-white flex items-center justify-center px-1">2</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full hover:bg-slate-100"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="container-x py-4 flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 font-medium ${isActive ? 'text-brand-700' : 'text-slate-700'}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link to="/login" onClick={() => setOpen(false)} className="py-3 font-medium text-slate-700">
                Inloggen
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
