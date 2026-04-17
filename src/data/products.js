// Mock product data for the Pixel refurbished webshop clone.
// Images are unsplash URLs so they load without any backend.

export const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];
export const conditions = [
  { key: 'AS_NEW', label: 'Als nieuw', color: 'bg-emerald-100 text-emerald-700' },
  { key: 'EXCELLENT', label: 'Uitstekend', color: 'bg-brand-100 text-brand-700' },
  { key: 'GOOD', label: 'Goed', color: 'bg-amber-100 text-amber-700' },
  { key: 'FAIR', label: 'Redelijk', color: 'bg-orange-100 text-orange-700' }
];

export const products = [
  {
    slug: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    storage: '256GB',
    color: 'Natural Titanium',
    condition: 'AS_NEW',
    battery: 98,
    price: 879,
    originalPrice: 1229,
    rating: 4.9,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    description: 'De iPhone 15 Pro met A17 Pro chip, titanium behuizing en geavanceerd camerasysteem.'
  },
  {
    slug: 'iphone-14',
    name: 'iPhone 14',
    brand: 'Apple',
    storage: '128GB',
    color: 'Midnight',
    condition: 'EXCELLENT',
    battery: 92,
    price: 549,
    originalPrice: 879,
    rating: 4.8,
    reviews: 328,
    image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=800&q=80',
    description: 'iPhone 14 met krachtige A15 Bionic chip en superieure camera kwaliteit.'
  },
  {
    slug: 'iphone-13',
    name: 'iPhone 13',
    brand: 'Apple',
    storage: '128GB',
    color: 'Starlight',
    condition: 'EXCELLENT',
    battery: 89,
    price: 399,
    originalPrice: 729,
    rating: 4.7,
    reviews: 602,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80',
    description: 'Betrouwbare iPhone 13 met uitstekende batterijduur en ceramic shield display.'
  },
  {
    slug: 'samsung-galaxy-s23',
    name: 'Samsung Galaxy S23',
    brand: 'Samsung',
    storage: '256GB',
    color: 'Phantom Black',
    condition: 'AS_NEW',
    battery: 96,
    price: 489,
    originalPrice: 899,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
    description: 'Vlaggenschip Samsung met Snapdragon 8 Gen 2 en Dynamic AMOLED 2X display.'
  },
  {
    slug: 'google-pixel-8',
    name: 'Google Pixel 8',
    brand: 'Google',
    storage: '128GB',
    color: 'Obsidian',
    condition: 'EXCELLENT',
    battery: 94,
    price: 459,
    originalPrice: 799,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
    description: 'Google Pixel 8 met Tensor G3 en AI-powered Magic Editor.'
  },
  {
    slug: 'iphone-12',
    name: 'iPhone 12',
    brand: 'Apple',
    storage: '64GB',
    color: 'Blue',
    condition: 'GOOD',
    battery: 86,
    price: 299,
    originalPrice: 639,
    rating: 4.6,
    reviews: 814,
    image: 'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=800&q=80',
    description: 'iPhone 12 met 5G, OLED Super Retina XDR display en A14 Bionic.'
  },
  {
    slug: 'samsung-galaxy-s22',
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    storage: '128GB',
    color: 'Green',
    condition: 'GOOD',
    battery: 87,
    price: 329,
    originalPrice: 749,
    rating: 4.6,
    reviews: 410,
    image: 'https://images.unsplash.com/photo-1644501635454-3ffd77fe28a1?w=800&q=80',
    description: 'Galaxy S22 met compacte vormgeving en pro-grade camera.'
  },
  {
    slug: 'oneplus-11',
    name: 'OnePlus 11',
    brand: 'OnePlus',
    storage: '256GB',
    color: 'Titan Black',
    condition: 'EXCELLENT',
    battery: 91,
    price: 389,
    originalPrice: 849,
    rating: 4.7,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1674268749638-25a0b486f04f?w=800&q=80',
    description: 'OnePlus 11 met Hasselblad camera en snel 100W opladen.'
  },
  {
    slug: 'iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    storage: '128GB',
    color: 'Pink',
    condition: 'AS_NEW',
    battery: 97,
    price: 749,
    originalPrice: 969,
    rating: 4.9,
    reviews: 221,
    image: 'https://images.unsplash.com/photo-1696446702183-be9765f20071?w=800&q=80',
    description: 'Nieuwste iPhone 15 met USB-C, Dynamic Island en 48MP camera.'
  },
  {
    slug: 'google-pixel-7',
    name: 'Google Pixel 7',
    brand: 'Google',
    storage: '128GB',
    color: 'Snow',
    condition: 'GOOD',
    battery: 88,
    price: 299,
    originalPrice: 649,
    rating: 4.5,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
    description: 'Pixel 7 met Tensor G2 en pure Android ervaring.'
  },
  {
    slug: 'xiaomi-13',
    name: 'Xiaomi 13',
    brand: 'Xiaomi',
    storage: '256GB',
    color: 'White',
    condition: 'EXCELLENT',
    battery: 93,
    price: 419,
    originalPrice: 799,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80',
    description: 'Xiaomi 13 met Leica camera en Snapdragon 8 Gen 2.'
  },
  {
    slug: 'iphone-11',
    name: 'iPhone 11',
    brand: 'Apple',
    storage: '64GB',
    color: 'Black',
    condition: 'FAIR',
    battery: 85,
    price: 199,
    originalPrice: 519,
    rating: 4.4,
    reviews: 1132,
    image: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=800&q=80',
    description: 'Betaalbare iPhone 11 met dual-camera en lange batterijduur.'
  }
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCondition(key) {
  return conditions.find((c) => c.key === key);
}
