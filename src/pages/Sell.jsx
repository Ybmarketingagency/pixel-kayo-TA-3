import { useState } from 'react';
import { Smartphone, Tag, Mail, ChevronRight, CheckCircle2, DollarSign } from 'lucide-react';

const brandLogos = ['Apple', 'Samsung', 'Overig'];
const conditionOptions = [
  { k: 'perfect', t: 'Perfect', d: 'Geen krassen, werkt als nieuw', f: 1.0 },
  { k: 'good', t: 'Goed', d: 'Lichte gebruikssporen', f: 0.8 },
  { k: 'fair', t: 'Redelijk', d: 'Duidelijke krassen, alles werkt', f: 0.6 },
  { k: 'broken', t: 'Defect', d: 'Scherm stuk of werkt niet goed', f: 0.3 }
];

export default function Sell() {
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('');
  const [email, setEmail] = useState('');

  const baseValue = model ? 250 + model.length * 12 : 250;
  const cf = conditionOptions.find((c) => c.k === condition)?.f || 1;
  const estimate = Math.round(baseValue * cf);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-cyan-50 border-b border-slate-200">
        <div className="container-x py-16 text-center">
          <span className="chip mb-3"><DollarSign className="w-3 h-3" /> Trade-in</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Verkoop je <span className="gradient-text">telefoon</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Geef je oude telefoon een tweede leven én verdien er nog aan ook. Vraag vrijblijvend een bod aan.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="card p-8 md:p-10">
              {/* Steps */}
              <div className="flex items-center mb-8">
                {[1, 2, 3, 4].map((n, i) => (
                  <div key={n} className="flex items-center flex-1 last:flex-initial">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                      step >= n ? 'bg-gradient-to-r from-brand-600 to-cyan-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {step > n ? <CheckCircle2 className="w-5 h-5" /> : n}
                    </div>
                    {i < 3 && <div className={`flex-1 h-0.5 mx-2 ${step > n ? 'bg-brand-500' : 'bg-slate-200'}`} />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold mb-1">Welk merk?</h2>
                  <p className="text-slate-500 mb-6">Kies het merk van je telefoon</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {brandLogos.map((b) => (
                      <button
                        key={b}
                        onClick={() => { setBrand(b); setStep(2); }}
                        className={`p-6 rounded-2xl border-2 font-semibold transition hover:border-brand-500 hover:bg-brand-50 ${
                          brand === b ? 'border-brand-500 bg-brand-50' : 'border-slate-200'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold mb-1">Welk model?</h2>
                  <p className="text-slate-500 mb-6">Bijvoorbeeld: iPhone 13, Galaxy S22...</p>
                  <input
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="input text-lg"
                    placeholder="Typ je model"
                  />
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setStep(1)} className="btn-outline">Terug</button>
                    <button onClick={() => model && setStep(3)} disabled={!model} className="btn-primary flex-1 disabled:opacity-50">
                      Verder <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-bold mb-1">Wat is de staat?</h2>
                  <p className="text-slate-500 mb-6">Wees eerlijk — we inspecteren alles.</p>
                  <div className="space-y-3">
                    {conditionOptions.map((c) => (
                      <button
                        key={c.k}
                        onClick={() => setCondition(c.k)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition ${
                          condition === c.k ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold">{c.t}</div>
                            <div className="text-sm text-slate-500">{c.d}</div>
                          </div>
                          {condition === c.k && <CheckCircle2 className="w-5 h-5 text-brand-600" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setStep(2)} className="btn-outline">Terug</button>
                    <button onClick={() => condition && setStep(4)} disabled={!condition} className="btn-primary flex-1 disabled:opacity-50">
                      Bekijk bod <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <div className="text-center py-6">
                    <div className="inline-block px-6 py-3 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4">
                      Ons voorlopige bod
                    </div>
                    <div className="text-6xl font-black gradient-text">€{estimate}</div>
                    <p className="text-slate-500 mt-3">
                      Voor je {brand} {model} in staat "{conditionOptions.find((c) => c.k === condition)?.t}"
                    </p>
                    <div className="mt-8 max-w-md mx-auto text-left">
                      <label className="block text-sm font-medium mb-1.5">Jouw e-mailadres</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="jan@voorbeeld.nl" />
                      <button
                        onClick={() => alert('Bedankt! Check je e-mail voor de volgende stappen.')}
                        disabled={!email}
                        className="btn-primary w-full mt-4 disabled:opacity-50"
                      >
                        Claim mijn bod
                      </button>
                      <p className="text-xs text-slate-500 mt-3 text-center">
                        We nemen binnen 24 uur contact met je op om de inruil af te ronden.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { i: Smartphone, t: 'Eenvoudig proces', d: '4 stappen, binnen 2 minuten klaar' },
              { i: Tag, t: 'Eerlijke prijs', d: 'Transparant en marktconform bod' },
              { i: Mail, t: 'Persoonlijk contact', d: 'We mailen je met de volgende stappen' },
              { i: DollarSign, t: 'Snelle afhandeling', d: 'Bod binnen enkele minuten in je mailbox' }
            ].map((p) => (
              <div key={p.t} className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                  <p.i className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">{p.t}</div>
                  <div className="text-sm text-slate-600">{p.d}</div>
                </div>
              </div>
            ))}
            <div className="card p-6 bg-gradient-to-br from-brand-600 to-cyan-600 text-white border-0">
              <div className="text-xl font-black">Ook een defect toestel?</div>
              <div className="text-white/90 text-sm mt-2">Zelfs voor toestellen met schade of een defect hebben we vaak nog een mooi bod. Vraag het gewoon aan.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
