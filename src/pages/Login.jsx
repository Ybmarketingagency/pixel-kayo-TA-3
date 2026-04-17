import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo.jsx';

export default function Login() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="card p-8">
          <div className="flex justify-center mb-6"><Logo /></div>
          <h1 className="text-2xl font-black text-center">Welkom terug</h1>
          <p className="text-sm text-slate-500 text-center mt-1">Log in om verder te gaan</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">E-mailadres</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" className="input pl-10" placeholder="jan@voorbeeld.nl" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Wachtwoord</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="password" className="input pl-10" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="accent-brand-600" /> Onthoud mij
              </label>
              <Link to="#" className="text-brand-700 font-medium hover:underline">Wachtwoord vergeten?</Link>
            </div>
            <button className="btn-primary w-full">
              Inloggen <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
            <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-500">of</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="btn-outline !px-3 text-sm">Google</button>
            <button className="btn-outline !px-3 text-sm">Apple</button>
          </div>

          <p className="text-center text-sm text-slate-600 mt-8">
            Nog geen account? <Link to="/register" className="text-brand-700 font-semibold hover:underline">Registreren</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
