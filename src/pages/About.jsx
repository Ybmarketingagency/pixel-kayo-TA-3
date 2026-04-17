import { Link } from 'react-router-dom';
import { Leaf, Users, Smartphone, Cloud, ArrowRight, Target, Heart, Recycle, Sparkles } from 'lucide-react';

export default function About() {
  const goals = [
    { v: '72-punten', l: 'Inspectie per telefoon', i: Target },
    { v: '2 jaar', l: 'Garantie op elk toestel', i: Heart },
    { v: '85%+', l: 'Batterij garantie', i: Smartphone },
    { v: '30 dagen', l: 'Retour zonder reden', i: Recycle }
  ];

  const values = [
    { t: 'Kwaliteit voorop', d: '72 controlepunten. Geen compromissen op wat belangrijk is.', i: Target },
    { t: 'Planet first', d: 'Elke telefoon die we refurbishen, is een minder in de afvalberg.', i: Leaf },
    { t: 'Eerlijke prijzen', d: 'Transparant, begrijpelijk en altijd de beste deal.', i: Recycle }
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50">
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-brand-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-300/30 blur-3xl" />
        </div>
        <div className="container-x py-20 md:py-28 text-center">
          <span className="chip mb-4"><Leaf className="w-3 h-3" /> Onze missie</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            We maken tech <span className="gradient-text">duurzaam</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Pixel is geboren uit frustratie. Nieuwe telefoons zijn te duur, worden te snel weggegooid en de planeet betaalt de rekening. Wij doen het anders.
          </p>
        </div>
      </section>

      {/* Beloftes ipv "prestaties" */}
      <section className="container-x -mt-10 relative z-10">
        <div className="text-center mb-6">
          <span className="chip"><Sparkles className="w-3 h-3" /> Onze belofte</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {goals.map((s) => (
            <div key={s.l} className="card p-6 text-center">
              <s.i className="w-6 h-6 text-brand-600 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-black gradient-text">{s.v}</div>
              <div className="text-xs md:text-sm text-slate-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="chip mb-3">Ons verhaal</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Refurbished verdient <span className="gradient-text">beter</span>
            </h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>
                Pixel is opgericht met één simpele overtuiging: een tweedehands telefoon hoeft niet te voelen als een compromis. Wij geloven dat refurbished net zo premium kan zijn als nieuw — zonder de prijs én zonder de impact op de planeet.
              </p>
              <p>
                Daarom zijn we streng. Elke telefoon die bij ons binnenkomt, wordt getest, gecontroleerd en waar nodig voorzien van nieuwe onderdelen. Wat niet door onze 72-punten check heen komt, verkopen we niet. Zo simpel is het.
              </p>
              <p>
                Ons doel is om mensen te laten zien dat bewust consumeren niet betekent dat je moet inleveren op kwaliteit. Betere tech, lagere prijs, kleinere voetafdruk — en daar zijn we nog maar net mee begonnen.
              </p>
            </div>
            <Link to="/products" className="btn-primary mt-8">
              Bekijk onze telefoons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-100 to-cyan-100 relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="chip mb-3">Onze waarden</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Waar we <span className="gradient-text">voor staan</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="card p-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-brand-600/30">
                  <v.i className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{v.t}</h3>
                <p className="text-slate-600 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-cyan-600 p-10 md:p-16 text-white text-center">
            <Leaf className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mx-auto">
              Duurzaamheid zit in alles wat we doen
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              Eco-verpakking, CO2-neutrale verzending en zoveel mogelijk telefoons een tweede leven geven. Zo willen we stap voor stap bijdragen aan een bewustere tech-industrie.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
