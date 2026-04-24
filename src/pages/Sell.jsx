import { Smartphone, Tag, MessageCircle, CheckCircle2, Zap, Shield, ArrowRight, Repeat, Wallet, Check, XCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp.js';

const tradeInMessage   = 'Hoi Pixel! Ik wil mijn telefoon inruilen voor een ander toestel. Kunnen jullie mij een bod doen?';
const directSellMessage = 'Hoi Pixel! Ik wil mijn telefoon verkopen (zonder inruil). Kunnen jullie mij een bod doen?';

export default function Sell() {
  const tradeInHref   = whatsappUrl(tradeInMessage);
  const directSellHref = whatsappUrl(directSellMessage);
  const waHref = directSellHref; // default for generic CTAs

  const steps = [
    { n: '1', i: MessageCircle, t: 'Chat op WhatsApp', d: 'Stuur ons merk, model, kleur en staat van je telefoon.' },
    { n: '2', i: Tag, t: 'Ontvang je bod', d: 'We doen binnen korte tijd een eerlijk, marktconform bod.' },
    { n: '3', i: CheckCircle2, t: 'Deal & afhandelen', d: 'Akkoord? We spreken af voor overhandiging en betaling.' }
  ];

  const perks = [
    { i: Zap, t: 'Snelle reactie', d: 'Geen wachtrij, persoonlijk contact' },
    { i: Tag, t: 'Eerlijke prijs', d: 'Transparant en marktconform' },
    { i: Shield, t: 'Veilig & simpel', d: 'Geen gedoe met formulieren' },
    { i: Smartphone, t: 'Apple & Samsung', d: 'Werkend of met defect' }
  ];

  const acceptedModels = [
    { brand: 'iPhone', models: ['iPhone 13 · 13 mini · 13 Pro · 13 Pro Max', 'iPhone 14 · 14 Plus · 14 Pro · 14 Pro Max', 'iPhone 15 · 15 Plus · 15 Pro · 15 Pro Max', 'iPhone 16 · 16 Plus · 16 Pro · 16 Pro Max'] },
    { brand: 'Samsung', models: ['Galaxy S23 · S23+ · S23 Ultra', 'Galaxy S24 · S24+ · S24 Ultra', 'Galaxy S25 · S25+ · S25 Ultra'] }
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-emerald-50 border-b border-slate-200">
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute -top-20 right-10 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute bottom-0 -left-10 w-96 h-96 rounded-full bg-brand-200/40 blur-3xl" />
        </div>
        <div className="container-x py-16 md:py-20 text-center">
          <span className="chip mb-3"><MessageCircle className="w-3 h-3" /> Verkopen via WhatsApp</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Verkoop je <span className="gradient-text">telefoon</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base md:text-lg">
            Geen calculators, geen omwegen. Stuur ons een berichtje op WhatsApp en we doen je een eerlijk bod — vaak binnen enkele minuten.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/25 hover:scale-[1.02] transition text-lg"
            >
              <MessageCircle className="w-5 h-5" /> Chat op WhatsApp
            </a>
            <a href="tel:+31624978746" className="btn-outline">
              Of bel ons
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            +31 6 24978746 · Ma-Za bereikbaar
          </p>
        </div>
      </section>

      {/* Two options: trade-in vs direct sale */}
      <section className="section-pad">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="chip mb-3">Twee manieren</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Inruilen of <span className="gradient-text">direct verkopen</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Wil je een nieuw toestel bij ons? Ruil 'm in voor extra korting. Of verkoop je telefoon direct — zonder iets terug te kopen. Beide kan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Trade-in card */}
            <a
              href={tradeInHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 relative overflow-hidden group hover:-translate-y-1 transition"
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br from-brand-200/50 to-cyan-200/50 blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-brand-600/30">
                  <Repeat className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black">Inruilen</h3>
                <p className="mt-2 text-slate-600">
                  Koop een nieuw toestel bij ons en ruil je oude in. Je krijgt het inruilbedrag direct van de aankoopprijs afgetrokken.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Extra korting op je nieuwe telefoon</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Alles in één transactie</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Duurzaam — geen toestel in de la</li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-brand-700 font-semibold group-hover:gap-3 transition-all">
                  Start inruil via WhatsApp <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Direct sale card */}
            <a
              href={directSellHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 relative overflow-hidden group hover:-translate-y-1 transition"
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-200/50 to-teal-200/50 blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-600/30">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black">Direct verkopen</h3>
                <p className="mt-2 text-slate-600">
                  Geen nieuwe telefoon nodig? We kopen 'm ook gewoon van je over. Je krijgt het bedrag netjes overgemaakt na de deal.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Zonder inruil-verplichting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Snelle uitbetaling</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Geen gedoe met Marktplaats</li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-semibold group-hover:gap-3 transition-all">
                  Start verkoop via WhatsApp <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Accepted models */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="card p-6 md:p-10">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <span className="chip mb-3"><Check className="w-3 h-3" /> Welke toestellen?</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                  We kopen deze modellen op
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
                <XCircle className="w-3.5 h-3.5" /> Andere modellen helaas niet
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {acceptedModels.map((b) => (
                <div key={b.brand} className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-brand-700" />
                    </div>
                    <h3 className="text-lg font-bold">{b.brand}</h3>
                  </div>
                  <ul className="space-y-2">
                    {b.models.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500 text-center">
              <strong>iPhone:</strong> vanaf iPhone 13-serie · <strong>Samsung:</strong> vanaf Galaxy S23-serie · Werkend of met defect — stuur foto's mee voor een eerlijk bod.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip mb-3">Zo werkt het</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              In 3 stappen <span className="gradient-text">verkocht</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="card p-8 relative overflow-hidden">
                <div className="text-6xl font-black text-slate-100 absolute -top-2 right-4 select-none">{s.n}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-600/30">
                    <s.i className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.t}</h3>
                  <p className="text-slate-600 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg hover:scale-[1.02] transition"
            >
              <MessageCircle className="w-4 h-4" /> Start nu <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {perks.map((p) => (
              <div key={p.t} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
                  <p.i className="w-5 h-5" />
                </div>
                <div className="font-bold">{p.t}</div>
                <div className="text-sm text-slate-600 mt-1">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
