import { Link } from 'react-router-dom';
import { Heart, BatteryMedium, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const image = product.images?.[0] || product.image;

  return (
    <Link to={`/product/${product.slug}`} className="group card overflow-hidden block">
      <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-rose-600 text-white">
            -{discount}%
          </span>
        )}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:bg-white hover:text-rose-600 transition"
          aria-label="Toevoegen aan favorieten"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition">{product.name}</h3>
          <div className="flex items-center gap-0.5 text-xs text-slate-500 flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-slate-500">{product.storage} · {product.color}</p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <BatteryMedium className="w-3.5 h-3.5 text-emerald-600" />
          <span>{product.battery}% batterij</span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-xl font-black gradient-text">€{product.price}</div>
            <div className="text-xs text-slate-400 line-through">€{product.originalPrice}</div>
          </div>
          <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-2 py-1 rounded-full">
            Bespaar €{product.originalPrice - product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
