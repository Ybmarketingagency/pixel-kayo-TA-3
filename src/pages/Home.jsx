import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, BatteryFull, Truck, Leaf, Award, Sparkles,
  ArrowRight, Recycle, CheckCircle2, Star, Quote, ChevronLeft, ChevronRight
} from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

const trust = [
  { icon: ShieldCheck, title: '6 maanden garantie', desc: 'Volledige dekking' },
  { icon: CheckCircle2, title: '72-punten check', desc: 'Elke telefoon getest' },
  { icon: BatteryFull, title: '85%+ batterij', desc: 'Op elk toestel gecheckt' },
  { icon: Truck, title: 'Gratis verzending', desc: 'CO2-neutraal bezorgd' }
];

const process = [
  {
    num: '01', title: 'We inspecteren alles',
    desc: '72 controlepunten. Display, batterij, camera\'s, knoppen, poorten – als het bestaat, testen we het. Twee keer.'
  },
  {
    num: '02', title: 'We repareren wat nodig is',
    desc: 'Versleten onderdelen worden vervangen door premium vervangingen. Batterijen onder 85%? Weg ermee.'
  },
  {
    num: '03', title: 'We verzenden groen',
    desc: 'Eco-verpakking, CO2-neutrale levering. Je telefoon komt klaar voor gebruik, zonder schuldgevoel.'
  }
];

const reviews = [
  { name: 'Sanne de Vries', text: 'Mijn iPhone 14 ziet eruit als nieuw en werkt perfect. De besparing was enorm en de levering ging razendsnel.', rating: 5, product: 'iPhone 14' },
  { name: 'Mark Janssen', text: 'Snelle levering, goed verpakt. De garantie gaf me het vertrouwen om refurbished te proberen.', rating: 5, product: 'Samsung Galaxy S23' },
  { name: 'Lisa Bakker', text: 'Supergoed proces. Ik verkocht mijn oude telefoon en kreeg direct mijn nieuwe. Alles binnen één week geregeld.', rating: 5, product: 'iPhone 15 Pro' },
  { name: 'Tom van Dijk', text: 'Prachtige kwaliteit, geen krasje te bekennen. De batterij is top en alles werkt als vanouds.', rating: 5, product: 'iPhone 16 Pro' },
  { name: 'Emma Visser', text: 'Ik was sceptisch over refurbished, maar Pixel heeft me overtuigd. Geweldige klantenservice ook!', rating: 5, product: 'iPhone 13' },
  { name: 'Daan Smit', text: 'Beste keuze ooit. Bespaarde honderden euro\'s en nog goed voor de planeet ook.', rating: 5, product: 'Samsung S24' },
  { name: 'Fleur Hendriks', text: 'Communicatie was uitstekend, track & trace werkt perfect. Mijn telefoon kwam in mint conditie.', rating: 5, product: 'iPhone 15 Plus' },
  { name: 'Julian Bos', text: 'Van bestelling tot ontvangst: alles gladjes verlopen. Absoluut een aanrader voor iedereen.', rating: 5, product: 'Galaxy S22 Ultra' },
  { name: 'Nina Peters', text: 'Super blij met mijn aankoop. Snelle levering en de telefoon werkt perfect!', rating: 5, product: 'Galaxy S25 Ultra' }
];

const REVIEWS_PER_PAGE = 3;

export default function Home() {
  const [reviewPage, setReviewPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const visibleReviews = reviews.slice(reviewPage * REVIEWS_PER_PAGE, reviewPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-200/60 to-cyan-200/40 blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-200/40 to-brand-100/40 blur-3xl" />
        </div>
        <div className="container-x pt-10 pb-16 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 text-brand-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Recycle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Goed voor je portemonnee. Geweldig voor de planeet.</span>
                <span className="sm:hidden">Goed voor jou &amp; de planeet</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
                Tech die <span className="gradient-text">vriendelijk is</span> voor de aarde
              </h1>
              {/* Long copy only on desktop */}
              <p className="hidden sm:block mt-6 text-lg text-slate-600 max-w-xl lg:mx-0 mx-auto">
                Waarom nieuw kopen als refurbished net zo goed is? Krijg premium telefoons met tot <strong>70% korting</strong>, terwijl je de planeet een pauze geeft.
              </p>
              {/* Short copy on mobile */}
              <p className="sm:hidden mt-4 text-base text-slate-600">
                Premium refurbished iPhones &amp; Samsungs. Tot <strong>70% korting</strong>.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
                <Link to="/products" className="btn-primary">
                  Bekijk telefoons <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/verkopen" className="btn-outline">
                  Verkoop je telefoon
                </Link>
              </div>

              <div className="hidden sm:grid mt-10 lg:mt-12 grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { v: '72', l: 'Punten inspectie' },
                  { v: '6 mnd', l: 'Garantie' },
                  { v: 'Gratis', l: 'Verzending' }
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-black gradient-text whitespace-nowrap">{s.v}</div>
                    <div className="text-xs md:text-sm text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone visual + floating cards */}
            <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[340px] sm:min-h-[460px] lg:min-h-[520px]">
              {/* Glow ring behind phone */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-brand-300/40 to-cyan-300/40 blur-3xl" />
              </div>

              {/* Phone image */}
              <div className="relative z-10 animate-float">
                <img
                  src="/products/iphone-15-pro-natural/02.jpg"
                  alt="iPhone"
                  className="w-56 sm:w-72 lg:w-80 xl:w-96 drop-shadow-2xl select-none pointer-events-none"
                />
              </div>

              {/* Floating card: warranty */}
              <div className="absolute top-4 left-2 sm:top-10 sm:left-0 lg:left-4 z-20 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-700" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold leading-tight">6 mnd garantie</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Op elk toestel</div>
                </div>
              </div>

              {/* Floating card: check */}
              <div className="absolute top-2 right-2 sm:top-6 sm:right-0 lg:right-4 z-20 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-700" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold leading-tight">72-punten check</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Elk toestel getest</div>
                </div>
              </div>

              {/* Floating card: eco */}
              <div className="absolute bottom-6 left-4 sm:bottom-12 sm:left-4 lg:left-8 z-20 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold leading-tight">CO₂-neutraal</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Groen bezorgd</div>
                </div>
              </div>

              {/* Floating card: discount */}
              <div className="absolute bottom-4 right-2 sm:bottom-8 sm:right-0 lg:right-6 z-20 bg-gradient-to-br from-brand-600 to-cyan-600 text-white rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-3">
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black leading-none">-70%</div>
                  <div className="text-[10px] sm:text-[11px] text-white/90 mt-1">Tot korting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ICONS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container-x py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trust.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.title}</div>
                  <div className="text-xs text-slate-500">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="chip mb-3"><Sparkles className="w-3 h-3" /> Hot Deals</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Telefoons waar mensen <span className="gradient-text">van houden</span>
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1">
              Bekijk alles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-slate-50">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="chip mb-3">Het proces</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Niet alle refurb is <span className="gradient-text">gelijk gemaakt</span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              We zijn geobsedeerd door kwaliteit. Elke telefoon doorloopt onze 72-punten inspectie omdat 'goed genoeg' niet in ons vocabulaire zit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.num} className="card p-8 relative overflow-hidden">
                <div className="text-6xl font-black text-slate-100 absolute -top-2 right-4 select-none">{p.num}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-brand-600/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="chip mb-3"><Leaf className="w-3 h-3" /> Waarom het belangrijk is</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Nieuwe telefoon? <span className="gradient-text">Overschat.</span>
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Een nieuwe telefoon maken is zwaar voor de planeet. Mijnbouw, productie, verzending – het telt allemaal op. Door refurbished te kiezen ben je eigenlijk een eco-held. Geen cape nodig.
              </p>
              <Link to="/over-ons" className="btn-outline mt-8">
                Onze impact <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '150M+', l: 'Telefoons jaarlijks wereldwijd weggegooid' },
                { v: 'Tot 70%', l: 'Mogelijke besparing t.o.v. nieuw' },
                { v: '85 kg', l: 'CO₂ bespaard per refurbished toestel' },
                { v: '80%', l: 'Minder e-waste door hergebruik' }
              ].map((s) => (
                <div key={s.l} className="card p-6">
                  <div className="text-3xl font-black gradient-text">{s.v}</div>
                  <div className="text-sm text-slate-600 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad bg-slate-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip mb-3"><Star className="w-3 h-3" /> Reviews</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Mensen lijken ons <span className="gradient-text">leuk te vinden</span>
            </h2>
            <p className="mt-4 text-slate-600">Echte ervaringen van echte klanten</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visibleReviews.map((r) => (
              <div key={r.name} className="card p-8">
                <Quote className="w-8 h-8 text-brand-200 mb-4" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-slate-500">Over {r.product} · Geverifieerde koper</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setReviewPage((p) => (p - 1 + totalPages) % totalPages)}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-brand-500 hover:text-brand-700 hover:shadow-md transition"
              aria-label="Vorige reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 px-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewPage(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === reviewPage ? 'w-8 bg-gradient-to-r from-brand-600 to-cyan-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Pagina ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setReviewPage((p) => (p + 1) % totalPages)}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-brand-500 hover:text-brand-700 hover:shadow-md transition"
              aria-label="Volgende reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-cyan-600 p-10 md:p-16 text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-medium mb-4">
                <Award className="w-3.5 h-3.5" /> Word onderdeel van de beweging
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Klaar om slimmer te kopen?
              </h2>
              <p className="mt-4 text-white/90 text-lg">
                Dezelfde premium telefoons. Betere prijzen. Kleinere voetafdruk. Het is eigenlijk een no-brainer als je erover nadenkt.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/products" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-white text-brand-700 hover:scale-[1.02] transition">
                  Shop telefoons <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/verkopen" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/40 text-white hover:bg-white/10 transition">
                  Verkoop je telefoon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
