import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard.jsx';

/**
 * Horizontal, snap-scrolling product slider with left/right arrow controls.
 * Usage: <ProductSlider products={list} />
 */
export default function ProductSlider({ products }) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, [products]);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-slide]');
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Arrow buttons - hidden on mobile (use swipe instead) */}
      <button
        onClick={() => scroll(-1)}
        disabled={!canLeft}
        className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center transition ${
          canLeft ? 'hover:scale-110 hover:border-brand-500 hover:text-brand-700' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll links"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll(1)}
        disabled={!canRight}
        className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 items-center justify-center transition ${
          canRight ? 'hover:scale-110 hover:border-brand-500 hover:text-brand-700' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll rechts"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Gradient edge fades */}
      {canLeft && (
        <div className="hidden md:block absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
      )}
      {canRight && (
        <div className="hidden md:block absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />
      )}

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
      >
        {products.map((p) => (
          <div
            key={p.slug}
            data-slide
            className="snap-start flex-shrink-0 w-[70%] sm:w-[45%] md:w-[33%] lg:w-[24%]"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
