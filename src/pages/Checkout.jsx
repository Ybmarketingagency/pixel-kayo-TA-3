import { Link } from 'react-router-dom';
import { MessageCircle, ShieldCheck, Truck, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { generalContactUrl } from '../lib/whatsapp.js';

export default function Checkout() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-emerald-50 border-b border-slate-200">
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-brand-200/40 blur-3xl" />
        </div>
        <div className="container-x py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" /> Online bestellen volgt binnenkort
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Bestel nu via <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">WhatsApp</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto">
            We rollen de webshop checkout binnenkort uit. Tot die tijd helpen we je persoonlijk via WhatsApp — snel, eerlijk en zonder gedoe.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generalContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/25 hover:scale-[1.02] transition text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat op WhatsApp
            </a>
            <Link to="/products" className="btn-outline">
              Bekijk telefoons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Of bel ons op <a href="tel:+31624978746" className="font-semibold text-slate-800 hover:text-brand-700">+31 6 24978746</a>
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-center mb-10">
            Zo werkt het
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '1', t: 'Stuur je bericht', d: 'Kies een telefoon en klik op "Bestel via WhatsApp". We zien meteen welk model je wil.' },
              { n: '2', t: 'Persoonlijk advies', d: 'We checken de voorraad, geven advies en bevestigen de prijs.' },
              { n: '3', t: 'Regelen & leveren', d: 'Samen regelen we de betaling en verzending. Klaar is Kees.' }
            ].map((s) => (
              <div key={s.n} className="card p-6 relative overflow-hidden">
                <div className="text-6xl font-black text-slate-100 absolute -top-2 right-4 select-none">{s.n}</div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold">{s.t}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center">
            {[
              { i: ShieldCheck, t: '6 maanden garantie' },
              { i: Truck, t: 'Gratis verzending' },
              { i: CheckCircle2, t: '72-punten check' }
            ].map((p) => (
              <div key={p.t} className="p-4 rounded-2xl bg-slate-50">
                <p.i className="w-5 h-5 text-brand-600 mx-auto mb-2" />
                <span className="text-xs font-medium">{p.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
