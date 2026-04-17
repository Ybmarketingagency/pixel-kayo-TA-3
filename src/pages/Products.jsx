import { useMemo, useState } from 'react';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { products, brands, conditions } from '../data/products.js';

export default function Products() {
  const [brand, setBrand] = useState([]);
  const [cond, setCond] = useState([]);
  const [price, setPrice] = useState(1500);
  const [sort, setSort] = useState('featured');
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      (brand.length === 0 || brand.includes(p.brand)) &&
      (cond.length === 0 || cond.includes(p.condition)) &&
      p.price <= price
    );
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [brand, cond, price, sort]);

  const toggle = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-brand-600 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-600 blur-3xl" />
        </div>
        <div className="container-x py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Telefoons</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Alle <span className="gradient-text">telefoons</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            Getest, gegarandeerd en klaar om te gebruiken. Kies uit {products.length}+ refurbished modellen met 6 maanden garantie.
          </p>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-72 flex-shrink-0 ${open ? 'block' : 'hidden lg:block'}`}>
            <div className="card p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Merk</h4>
                <div className="space-y-2">
                  {brands.map((b) => (
                    <label key={b} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={brand.includes(b)}
                        onChange={() => toggle(brand, setBrand, b)}
                        className="w-4 h-4 accent-brand-600 rounded"
                      />
                      <span className="text-sm text-slate-700 group-hover:text-brand-700">{b}</span>
                      <span className="ml-auto text-xs text-slate-400">
                        {products.filter((p) => p.brand === b).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Staat</h4>
                <div className="space-y-2">
                  {conditions.map((c) => (
                    <label key={c.key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cond.includes(c.key)}
                        onChange={() => toggle(cond, setCond, c.key)}
                        className="w-4 h-4 accent-brand-600 rounded"
                      />
                      <span className="text-sm text-slate-700">{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3">Max prijs: €{price}</h4>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-brand-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>€100</span>
                  <span>€1500</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setBrand([]);
                  setCond([]);
                  setPrice(1500);
                }}
                className="mt-6 w-full text-sm font-medium text-brand-700 hover:underline"
              >
                Filters wissen
              </button>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 gap-4">
              <div className="text-sm text-slate-600">
                <strong className="text-slate-900">{filtered.length}</strong> telefoons gevonden
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setOpen(!open)}
                  className="lg:hidden btn-outline !px-4 !py-2 text-sm"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="input !py-2 !w-auto text-sm"
                >
                  <option value="featured">Aanbevolen</option>
                  <option value="price-asc">Prijs: laag → hoog</option>
                  <option value="price-desc">Prijs: hoog → laag</option>
                  <option value="rating">Best beoordeeld</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="card p-12 text-center">
                <p className="text-slate-500">Geen producten gevonden met deze filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}

            <div className="mt-10 flex items-center justify-center gap-2">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`w-10 h-10 rounded-full text-sm font-semibold ${
                    n === 1
                      ? 'bg-gradient-to-r from-brand-600 to-cyan-600 text-white'
                      : 'bg-white border border-slate-200 hover:border-brand-500'
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-2 text-slate-400">...</span>
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-sm font-semibold hover:border-brand-500">
                5
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
