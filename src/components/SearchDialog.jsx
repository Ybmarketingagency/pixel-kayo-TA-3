import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products } from '../data/products.js';

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.color.toLowerCase().includes(q) ||
      p.storage.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-2xl mx-auto mt-20 px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek op merk, model, kleur of opslag..."
              className="flex-1 text-lg bg-transparent focus:outline-none"
            />
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-slate-100" aria-label="Sluiten">
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-auto">
            {!query.trim() && (
              <div className="px-5 py-10 text-center text-slate-500">
                <p className="text-sm">Begin met typen om telefoons te vinden.</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {['iPhone 15', 'iPhone 16', 'Samsung S24', 'S25 Ultra'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="px-3 py-1 text-xs rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-700 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="px-5 py-10 text-center text-slate-500 text-sm">
                Geen resultaten voor "<strong>{query}</strong>"
              </div>
            )}

            {results.map((p) => (
              <Link
                key={p.slug}
                to={`/product/${p.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition border-b border-slate-50 last:border-0"
              >
                <img
                  src={p.images?.[0] || p.image}
                  alt={p.name}
                  className="w-14 h-14 rounded-xl object-contain bg-slate-50 flex-shrink-0 p-1"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 truncate">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.storage} · {p.color}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-bold gradient-text">€{p.price}</div>
                  <div className="text-xs text-slate-400 line-through">€{p.originalPrice}</div>
                </div>
              </Link>
            ))}

            {query.trim() && results.length > 0 && (
              <Link
                to={`/products`}
                onClick={onClose}
                className="block text-center py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 border-t border-slate-100"
              >
                Bekijk alle telefoons →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
