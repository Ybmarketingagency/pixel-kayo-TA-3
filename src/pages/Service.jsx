import { useState } from 'react';
import { HelpCircle, Package, Truck, RotateCcw, ShieldCheck, CreditCard, ChevronDown, Search } from 'lucide-react';

const categories = [
  {
    i: Package, t: 'Bestellingen', k: 'orders', faqs: [
      { q: 'Hoe plaats ik een bestelling?', a: 'Kies een telefoon, selecteer je opties en klik op "In winkelwagen". Daarna ga je naar de checkout om af te rekenen.' },
      { q: 'Kan ik mijn bestelling wijzigen?', a: 'Ja, binnen 1 uur na je bestelling kun je contact opnemen met onze klantenservice om wijzigingen door te voeren.' },
      { q: 'Welke betaalmethoden accepteren jullie?', a: 'We accepteren iDEAL, Bancontact, creditcard, PayPal, Apple Pay en achteraf betalen via Klarna.' }
    ]
  },
  {
    i: Truck, t: 'Verzending', k: 'shipping', faqs: [
      { q: 'Hoe snel wordt mijn bestelling geleverd?', a: 'Bestellingen voor 22:00 uur worden de volgende werkdag geleverd via PostNL of DHL.' },
      { q: 'Is verzending gratis?', a: 'Ja, alle bestellingen binnen Nederland en België worden gratis en CO2-neutraal verzonden.' },
      { q: 'Kan ik mijn bestelling volgen?', a: 'Je ontvangt een track & trace link zodra je pakket onderweg is.' }
    ]
  },
  {
    i: RotateCcw, t: 'Retour', k: 'returns', faqs: [
      { q: 'Hoeveel dagen retourrecht heb ik?', a: 'Je hebt 30 dagen de tijd om je bestelling kosteloos te retourneren, om welke reden dan ook.' },
      { q: 'Hoe stuur ik iets terug?', a: 'Ga naar je account, klik op "Retourneren" en wij mailen je een gratis retourlabel.' }
    ]
  },
  {
    i: ShieldCheck, t: 'Garantie', k: 'warranty', faqs: [
      { q: 'Hoe lang is de garantie?', a: 'Elke refurbished telefoon komt met 2 jaar volledige garantie op alle onderdelen.' },
      { q: 'Wat valt er onder de garantie?', a: 'Alle fabricagefouten en interne defecten. Schade door vallen of water valt er niet onder.' }
    ]
  },
  {
    i: CreditCard, t: 'Betalen', k: 'payment', faqs: [
      { q: 'Kan ik achteraf betalen?', a: 'Ja, via Klarna kun je in 3 termijnen van 0% rente betalen.' },
      { q: 'Is betalen veilig?', a: 'Al onze betalingen lopen via gecertificeerde betaalproviders met SSL-versleuteling.' }
    ]
  }
];

export default function Service() {
  const [active, setActive] = useState('orders');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const current = categories.find((c) => c.k === active);
  const filtered = current.faqs.filter((f) =>
    f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-cyan-50 border-b border-slate-200">
        <div className="container-x py-16 text-center">
          <span className="chip mb-3"><HelpCircle className="w-3 h-3" /> Klantenservice</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Hoe kunnen we <span className="gradient-text">helpen?</span>
          </h1>
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek in onze helpcentrum..."
              className="w-full pl-14 pr-5 py-4 rounded-full bg-white border border-slate-200 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="card p-4 sticky top-24">
              {categories.map((c) => (
                <button
                  key={c.k}
                  onClick={() => { setActive(c.k); setOpen(null); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
                    active === c.k ? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <c.i className="w-5 h-5" />
                  <span className="font-medium">{c.t}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-3">
            <h2 className="text-3xl font-black mb-6">{current.t}</h2>
            <div className="space-y-3">
              {filtered.map((f, i) => (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                  </button>
                  {open === i && (
                    <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="card p-10 text-center text-slate-500">
                  Geen resultaten voor "{query}". Probeer een andere zoekterm.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
