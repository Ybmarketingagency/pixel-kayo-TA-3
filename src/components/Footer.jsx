import { Link } from 'react-router-dom';
import { Instagram, Facebook, Leaf } from 'lucide-react';
import Logo from './Logo.jsx';

const cols = [
  {
    title: 'Shop',
    links: [
      { to: '/products', label: 'Alle telefoons' },
      { to: '/products?brand=Apple', label: 'Apple' },
      { to: '/products?brand=Samsung', label: 'Samsung' },
      { to: '/products?brand=Google', label: 'Google' },
      { to: '/verkopen', label: 'Verkoop je telefoon' }
    ]
  },
  {
    title: 'Bedrijf',
    links: [
      { to: '/over-ons', label: 'Over ons' },
      { to: '/over-ons', label: 'Onze impact' },
      { to: '/over-ons', label: 'Vacatures' },
      { to: '/over-ons', label: 'Pers' }
    ]
  },
  {
    title: 'Support',
    links: [
      { to: '/klantenservice', label: 'Helpcentrum' },
      { to: '/contact', label: 'Contact' },
      { to: '/klantenservice', label: 'Garantie' },
      { to: '/klantenservice', label: 'Veelgestelde vragen' }
    ]
  },
  {
    title: 'Juridisch',
    links: [
      { to: '/klantenservice', label: 'Privacy' },
      { to: '/klantenservice', label: 'Voorwaarden' },
      { to: '/klantenservice', label: 'Cookies' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-slate-600 max-w-xs">
              Premium refurbished telefoons. Goed voor je portemonnee, geweldig voor de planeet.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
              <Leaf className="w-3.5 h-3.5" /> CO2-neutraal vanaf dag één
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-slate-900 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="text-sm text-slate-600 hover:text-brand-700 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Pixel — Alle rechten voorbehouden
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { src: '/payments/iDEAL-Medium-Card.svg', alt: 'iDEAL' },
              { src: '/payments/Bancontact-Medium-Card.svg', alt: 'Bancontact' },
              { src: '/payments/Apple-Pay-Medium-Card.svg', alt: 'Apple Pay' }
            ].map((p) => (
              <div
                key={p.alt}
                className="h-8 bg-white border border-slate-200 rounded-lg px-2 flex items-center"
              >
                <img src={p.src} alt={p.alt} className="h-5 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
