import { Smartphone, Tag, MessageCircle, CheckCircle2, Zap, Shield, ArrowRight } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp.js';

const sellMessage = 'Hoi Pixel! Ik wil mijn telefoon verkopen. Kunnen jullie mij een bod doen?';

export default function Sell() {
  const waHref = whatsappUrl(sellMessage);

  const steps = [
    { n: '1', i: MessageCircle, t: 'Chat op WhatsApp', d: 'Stuur ons merk, model, kleur en staat van je telefoon.' },
    { n: '2', i: Tag, t: 'Ontvang je bod', d: 'We doen binnen korte tijd een eerlijk, marktconform bod.' },
    { n: '3', i: CheckCircle2, t: 'Deal & afhandelen', d: 'Akkoord? We spreken af voor overhandiging en betaling.' }
  ];

  const perks = [
    { i: Zap, t: 'Snelle reactie', d: 'Geen wachtrij, persoonlijk contact' },
    { i: Tag, t: 'Eerlijke prijs', d: 'Transparant en marktconform' },
    { i: Shield, t: 'Veilig & simpel', d: 'Geen gedoe met formulieren' },
    { i: Smartphone, t: 'Alle modellen', d: 'Apple, Samsung, zelfs defect' }
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

      {/* How it works */}
      <section className="section-pad">
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
      <section className="section-pad bg-slate-50">
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
