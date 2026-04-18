import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ChevronRight, Heart, Star, BatteryMedium, Truck, ShieldCheck,
  CheckCircle2, Minus, Plus, Zap, MessageCircle
} from 'lucide-react';
import { getProduct, products } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import { productOrderUrl } from '../lib/whatsapp.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug) || products[0];
  const images = product.images || [product.image];
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState(product.storage);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const orderHref = productOrderUrl({ ...product, qty });

  const storageOptions = ['128GB', '256GB', '512GB'];
  const related = products.filter((p) => p.brand === product.brand && p.slug !== product.slug).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-x pt-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-brand-700">Telefoons</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900">{product.name}</span>
        </div>
      </div>

      <section className="container-x py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="card aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative">
              <img src={images[active]} alt={product.name} className="w-full h-full object-contain p-8" />
              {discount > 0 && (
                <span className="absolute top-4 right-4 text-sm font-bold px-3 py-1.5 rounded-full bg-rose-600 text-white">
                  -{discount}%
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition ${i === active ? 'border-brand-500' : 'border-transparent hover:border-slate-300'} bg-slate-50`}
                >
                  <img src={src} alt="" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="text-slate-500">{product.brand}</span>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{product.rating}</span>
                <span className="text-slate-500">({product.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">{product.name}</h1>
            <p className="mt-3 text-slate-600">{product.description}</p>

            <div className="mt-6 flex items-end gap-3">
              <div className="text-4xl font-black gradient-text">€{product.price}</div>
              <div className="text-slate-400 line-through mb-1">€{product.originalPrice}</div>
              <span className="ml-2 mb-1 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                Bespaar €{product.originalPrice - product.price}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Bestel direct via WhatsApp · Persoonlijke service</p>

            <div className="mt-6 flex items-center gap-2 text-sm">
              <BatteryMedium className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">{product.battery}% batterij</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Getest en goedgekeurd</span>
            </div>

            {/* Color info */}
            <div className="mt-8">
              <div className="text-sm font-semibold mb-2">Kleur</div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-medium">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-brand-400 to-cyan-400" />
                {product.color}
              </div>
            </div>

            {/* Storage */}
            <div className="mt-6">
              <div className="text-sm font-semibold mb-3">Opslag</div>
              <div className="flex gap-2">
                {storageOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedStorage(s)}
                    className={`px-4 py-2.5 rounded-full border text-sm font-medium transition ${
                      selectedStorage === s
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + CTA */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-slate-200 rounded-full">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-slate-50 rounded-l-full">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-slate-50 rounded-r-full">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 !bg-gradient-to-r !from-emerald-500 !to-emerald-600"
              >
                <MessageCircle className="w-4 h-4" /> Bestel via WhatsApp
              </a>
              <button className="p-3 rounded-full border border-slate-200 hover:border-rose-500 hover:text-rose-600 transition">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: ShieldCheck, text: '6 maanden garantie' },
                { icon: Truck, text: 'Gratis verzending' },
                { icon: CheckCircle2, text: '72-punten check' }
              ].map((p) => (
                <div key={p.text} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50">
                  <p.icon className="w-5 h-5 text-brand-600 mb-2" />
                  <span className="text-xs font-medium">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What you get */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">Wat je krijgt</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: '72-punten inspectie', d: 'Elke telefoon wordt grondig getest op alle functies', i: CheckCircle2 },
              { t: 'Nieuwe batterij', d: 'Batterijen onder 85% worden altijd vervangen', i: Zap },
              { t: 'Originele onderdelen', d: 'We gebruiken alleen premium vervangende onderdelen', i: ShieldCheck }
            ].map((b) => (
              <div key={b.t} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
                  <b.i className="w-5 h-5" />
                </div>
                <h3 className="font-bold">{b.t}</h3>
                <p className="text-sm text-slate-600 mt-1">{b.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">Ook interessant</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
