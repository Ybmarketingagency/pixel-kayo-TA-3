import { Link } from 'react-router-dom';
import { Package, Heart, MapPin, Settings, LogOut, ShieldCheck, ChevronRight } from 'lucide-react';
import { products } from '../data/products.js';

export default function Account() {
  const orders = [
    { id: 'PXL-10234', date: '12 april 2026', status: 'Geleverd', total: 549, items: 1 },
    { id: 'PXL-10198', date: '28 maart 2026', status: 'Geleverd', total: 879, items: 2 }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-cyan-50 border-b border-slate-200">
        <div className="container-x py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-slate-500">Welkom terug</p>
              <h1 className="text-3xl md:text-4xl font-black">Jan Janssen</h1>
              <p className="text-sm text-slate-500 mt-1">Lid sinds maart 2026</p>
            </div>
            <button className="btn-outline">
              <LogOut className="w-4 h-4" /> Uitloggen
            </button>
          </div>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { i: Package, v: '12', l: 'Bestellingen', c: 'from-brand-500 to-cyan-500' },
            { i: Heart, v: '8', l: 'Favorieten', c: 'from-rose-500 to-pink-500' },
            { i: ShieldCheck, v: '1.250', l: 'Spaarpunten', c: 'from-emerald-500 to-teal-500' },
            { i: MapPin, v: '3', l: 'Adressen', c: 'from-amber-500 to-orange-500' }
          ].map((s) => (
            <div key={s.l} className="card p-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.c} text-white flex items-center justify-center mb-3`}>
                <s.i className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black">{s.v}</div>
              <div className="text-sm text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recente bestellingen */}
          <div className="lg:col-span-2 card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold">Recente bestellingen</h2>
              <Link to="#" className="text-sm font-semibold text-brand-700 hover:underline">Bekijk alles</Link>
            </div>
            <div className="space-y-3">
              {orders.map((o) => (
                <div key={o.id} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-brand-500 transition">
                  <img src={products[0].images?.[0] || products[0].image} alt="" className="w-14 h-14 rounded-xl object-contain bg-slate-50 p-1" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{o.id}</div>
                    <div className="text-sm text-slate-500">{o.items} item · {o.date}</div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {o.status}
                  </span>
                  <div className="text-right">
                    <div className="font-bold">€{o.total}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            {[
              { i: Package, t: 'Mijn bestellingen', d: 'Bekijk en volg je bestellingen' },
              { i: Heart, t: 'Verlanglijst', d: 'Je opgeslagen favorieten' },
              { i: MapPin, t: 'Adressen', d: 'Beheer je bezorgadressen' },
              { i: Settings, t: 'Instellingen', d: 'Wachtwoord en voorkeuren' }
            ].map((m) => (
              <Link key={m.t} to="#" className="card p-5 flex items-center gap-4 hover:border-brand-500 transition">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                  <m.i className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold">{m.t}</div>
                  <div className="text-sm text-slate-500">{m.d}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
