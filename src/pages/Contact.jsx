import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-cyan-50 border-b border-slate-200">
        <div className="container-x py-16 text-center">
          <span className="chip mb-3"><MessageCircle className="w-3 h-3" /> Contact</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Neem <span className="gradient-text">contact</span> op
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Vragen over een bestelling, product of onze service? We staan klaar om te helpen.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar info */}
          <div className="space-y-4">
            {[
              { i: Mail, t: 'Mail ons', v: 'hello@pixel.nl', s: 'Antwoord binnen 24 uur' },
              { i: Phone, t: 'Bel ons', v: '+31 20 123 4567', s: 'Ma-Vr 09:00 – 18:00' },
              { i: MapPin, t: 'Bezoek ons', v: 'Keizersgracht 100, Amsterdam', s: 'Alleen op afspraak' }
            ].map((c) => (
              <div key={c.t} className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
                  <c.i className="w-5 h-5" />
                </div>
                <h3 className="font-bold">{c.t}</h3>
                <p className="mt-1 font-medium">{c.v}</p>
                <p className="text-xs text-slate-500 mt-1">{c.s}</p>
              </div>
            ))}
            <div className="card p-6">
              <div className="flex items-center gap-2 font-bold mb-3">
                <Clock className="w-4 h-4 text-brand-700" /> Openingstijden
              </div>
              <div className="text-sm text-slate-600 space-y-1">
                <div className="flex justify-between"><span>Ma - Vr</span><span className="font-medium">09:00 - 18:00</span></div>
                <div className="flex justify-between"><span>Zaterdag</span><span className="font-medium">10:00 - 17:00</span></div>
                <div className="flex justify-between text-slate-400"><span>Zondag</span><span>Gesloten</span></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card p-8 md:p-10">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Bedankt voor je bericht!</h3>
                  <p className="text-slate-600 mt-2">We nemen binnen 24 uur contact met je op.</p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-6">
                    Nieuw bericht
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-5"
                >
                  <h2 className="text-2xl font-bold">Stuur ons een bericht</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Voornaam *</label>
                      <input className="input" placeholder="Jan" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Achternaam *</label>
                      <input className="input" placeholder="Janssen" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">E-mailadres *</label>
                    <input type="email" className="input" placeholder="jan@voorbeeld.nl" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Onderwerp *</label>
                      <select className="input" required>
                        <option value="">Kies een onderwerp</option>
                        <option>Bestelling</option>
                        <option>Retour</option>
                        <option>Garantie</option>
                        <option>Verkopen</option>
                        <option>Overig</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Bestelnummer</label>
                      <input className="input" placeholder="PXL-12345" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Bericht *</label>
                    <textarea rows={5} className="input resize-none" placeholder="Waar kunnen we je mee helpen?" required />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">Bericht versturen</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
