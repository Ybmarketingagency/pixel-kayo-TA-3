import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, Truck, CreditCard, ChevronRight, Minus, Plus, Trash2 } from 'lucide-react';
import { products } from '../data/products.js';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState('ideal');
  const [items, setItems] = useState([
    { ...products[0], qty: 1 },
    { ...products[3], qty: 1 }
  ]);

  const updateQty = (slug, delta) =>
    setItems(items.map((i) => i.slug === slug ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  const remove = (slug) => setItems(items.filter((i) => i.slug !== slug));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const paymentMethods = [
    { k: 'ideal', t: 'iDEAL', d: 'Direct betalen via je bank', img: '/payments/iDEAL-Medium-Card.svg' },
    { k: 'bancontact', t: 'Bancontact', d: 'Betaal direct met je Belgische bank', img: '/payments/Bancontact-Medium-Card.svg' },
    { k: 'apple', t: 'Apple Pay', d: 'Snel betalen met Apple Pay', img: '/payments/Apple-Pay-Medium-Card.svg' }
  ];

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-x py-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link to="/" className="hover:text-brand-700">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Afrekenen</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Afrekenen</h1>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Progress */}
            <div className="flex items-center gap-2">
              {['Bezorgen', 'Betalen', 'Bevestigen'].map((s, i) => {
                const n = i + 1;
                return (
                  <div key={s} className="flex items-center flex-1">
                    <div className={`flex items-center gap-2 ${step >= n ? 'text-brand-700' : 'text-slate-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        step >= n ? 'bg-brand-600 text-white' : 'bg-slate-200'
                      }`}>{n}</div>
                      <span className="text-sm font-medium hidden sm:inline">{s}</span>
                    </div>
                    {i < 2 && <div className={`flex-1 h-0.5 ml-3 ${step > n ? 'bg-brand-500' : 'bg-slate-200'}`} />}
                  </div>
                );
              })}
            </div>

            {step === 1 && (
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Bezorgadres</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">E-mailadres</label>
                    <input type="email" className="input" placeholder="jan@voorbeeld.nl" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Voornaam</label>
                      <input className="input" placeholder="Jan" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Achternaam</label>
                      <input className="input" placeholder="Janssen" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium mb-1.5">Straat</label>
                      <input className="input" placeholder="Keizersgracht" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Nr.</label>
                      <input className="input" placeholder="100" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Postcode</label>
                      <input className="input" placeholder="1015 CJ" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Stad</label>
                      <input className="input" placeholder="Amsterdam" />
                    </div>
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="btn-primary mt-8">
                  Door naar betalen <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Betaalmethode</h2>
                <div className="space-y-3">
                  {paymentMethods.map((m) => (
                    <button
                      key={m.k}
                      onClick={() => setPayment(m.k)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition flex items-center gap-4 ${
                        payment === m.k ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-14 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-xs overflow-hidden">
                        {m.img ? (
                          <img src={m.img} alt={m.t} className="h-6 w-auto" />
                        ) : (
                          <span>{m.t}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{m.t}</div>
                        <div className="text-sm text-slate-500">{m.d}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        payment === m.k ? 'border-brand-600 bg-brand-600' : 'border-slate-300'
                      }`}>
                        {payment === m.k && <div className="w-full h-full rounded-full bg-white scale-[0.4]" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(1)} className="btn-outline">Terug</button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1">
                    Bekijk bestelling <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Bevestig je bestelling</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50">
                    <div className="text-xs text-slate-500 mb-1">Bezorgadres</div>
                    <div className="font-medium">Jan Janssen, Keizersgracht 100, 1015 CJ Amsterdam</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50">
                    <div className="text-xs text-slate-500 mb-1">Betaling</div>
                    <div className="font-medium">{paymentMethods.find((m) => m.k === payment)?.t}</div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(2)} className="btn-outline">Terug</button>
                  <button onClick={() => alert('Bestelling geplaatst!')} className="btn-primary flex-1">
                    <Lock className="w-4 h-4" /> Betaal €{total}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Je bestelling ({items.length})</h3>
              <div className="space-y-4 max-h-[320px] overflow-auto pr-1">
                {items.map((it) => (
                  <div key={it.slug} className="flex gap-3">
                    <img src={it.images?.[0] || it.image} alt={it.name} className="w-16 h-16 rounded-xl object-contain bg-slate-50 p-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{it.name}</div>
                      <div className="text-xs text-slate-500">{it.storage} · {it.color}</div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQty(it.slug, -1)} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs font-semibold w-5 text-center">{it.qty}</span>
                          <button onClick={() => updateQty(it.slug, 1)} className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                        </div>
                        <div className="font-bold text-sm">€{it.price * it.qty}</div>
                      </div>
                    </div>
                    <button onClick={() => remove(it.slug)} className="text-slate-400 hover:text-rose-600 self-start">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotaal</span><span className="font-medium">€{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Verzending</span>
                  <span className="font-medium text-emerald-600">Gratis</span>
                </div>
                <div className="flex justify-between text-lg font-black pt-2 border-t border-slate-100">
                  <span>Totaal</span><span className="gradient-text">€{total}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> 6 maanden garantie</div>
                <div className="flex items-center gap-2"><Truck className="w-3.5 h-3.5 text-brand-600" /> Gratis verzending</div>
                <div className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-brand-600" /> Veilig betalen</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
