import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, User, Menu, X, Truck, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import Logo from './Logo.jsx';
import SearchDialog from './SearchDialog.jsx';
import { generalContactUrl } from '../lib/whatsapp.js';

const nav = [
  { to: '/products', label: 'Telefoons' },
  { to: '/verkopen', label: 'Verkopen' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/klantenservice', label: 'Klantenservice' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-navy-900 text-white text-xs">
        <div className="container-x flex items-center justify-center py-2 gap-6 md:gap-10 flex-wrap">
          <span className="flex items-center gap-2"><Truck className="w-3.5 h-3.5 text-brand-400" /> Gratis verzending</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-brand-400" /> 6 maanden garantie</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> 72-punten inspectie</span>
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

          <div className="hidden lg:block lg:flex-1 lg:max-w-md">
            <button
              onClick={openSearch}
              className="w-full flex items-center gap-3 pl-10 pr-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 transition text-sm text-slate-500 relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              Zoek naar iPhone, Samsung, Pixel...
              <span className="ml-auto text-xs font-semibold border border-slate-300 rounded px-1.5 py-0.5 text-slate-500">⌘K</span>
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={openSearch}
              className="lg:hidden p-2 rounded-full hover:bg-slate-100"
              aria-label="Zoeken"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/login" className="hidden sm:flex p-2 rounded-full hover:bg-slate-100" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <a
              href={generalContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:scale-[1.02] shadow-sm transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href={generalContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full bg-emerald-500 text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
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
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
