import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Gift, Zap } from 'lucide-react';
import Logo from '../components/Logo.jsx';

export default function Register() {
  return (
    <section className="py-16">
      <div className="container-x grid md:grid-cols-2 gap-12 items-center max-w-5xl">
        <div className="order-2 md:order-1">
          <div className="card p-8">
            <div className="flex justify-center mb-6"><Logo /></div>
            <h1 className="text-2xl font-black text-center">Maak een account</h1>
            <p className="text-sm text-slate-500 text-center mt-1">Gratis · in 30 seconden</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Voornaam</label>
                  <input className="input" placeholder="Jan" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Achternaam</label>
                  <input className="input" placeholder="Janssen" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">E-mailadres</label>
                <input type="email" className="input" placeholder="jan@voorbeeld.nl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Wachtwoord</label>
                <input type="password" className="input" placeholder="Min. 8 tekens" />
              </div>
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" className="mt-0.5 accent-brand-600" />
                <span>Ik ga akkoord met de <Link to="#" className="text-brand-700 hover:underline">voorwaarden</Link> en <Link to="#" className="text-brand-700 hover:underline">privacy policy</Link></span>
              </label>
              <button className="btn-primary w-full">
                Account aanmaken <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-center text-sm text-slate-600 mt-8">
              Al een account? <Link to="/login" className="text-brand-700 font-semibold hover:underline">Inloggen</Link>
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Word lid van de <span className="gradient-text">Pixel community</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Bespaar geld, red de planeet en krijg exclusieve voordelen.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { i: Gift, t: '€10 welkomstkorting', d: 'Op je eerste bestelling' },
              { i: Zap, t: 'Snellere checkout', d: 'Adressen opslaan voor volgende keer' },
              { i: ShieldCheck, t: 'Bestellingen volgen', d: 'Overzicht van al je orders en garantie' }
            ].map((b) => (
              <div key={b.t} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                  <b.i className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">{b.t}</div>
                  <div className="text-sm text-slate-600">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
