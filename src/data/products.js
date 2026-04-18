// Product catalog for Pixel refurbished webshop.
// Images live in /public/products/{slug}/0X.jpg (1-5).

export const brands = ['Apple', 'Samsung'];

// Image order per product folder:
//   01 = achterkant, 02 = voorkant, 03 = boven, 04 = onder, 05 = links, 06 = rechts
const img = (slug, n = 6) =>
  Array.from({ length: n }, (_, i) => `/products/${slug}/0${i + 1}.jpg`);

export const products = [
  // --- iPhone 13 series ---
  {
    slug: 'iphone-13',
    name: 'iPhone 13',
    brand: 'Apple',
    storage: '128GB',
    color: 'Blauw',
    battery: 92,
    price: 379,
    originalPrice: 729,
    rating: 4.7,
    reviews: 142,
    images: img('iphone-13'),
    description: 'iPhone 13 met krachtige A15 Bionic chip, dual-camera en Super Retina XDR display.'
  },
  {
    slug: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    brand: 'Apple',
    storage: '128GB',
    color: 'Blauw',
    battery: 90,
    price: 549,
    originalPrice: 1159,
    rating: 4.8,
    reviews: 98,
    images: img('iphone-13-pro'),
    description: 'iPhone 13 Pro met Pro camerasysteem, ProMotion display en A15 Bionic chip.'
  },
  {
    slug: 'iphone-13-pro-max',
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    storage: '256GB',
    color: 'Goud',
    battery: 91,
    price: 679,
    originalPrice: 1389,
    rating: 4.9,
    reviews: 84,
    images: img('iphone-13-pro-max'),
    description: 'iPhone 13 Pro Max met 6,7" ProMotion display en Pro camerasysteem.'
  },

  // --- iPhone 14 series ---
  {
    slug: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    storage: '128GB',
    color: 'Zwart',
    battery: 93,
    price: 749,
    originalPrice: 1329,
    rating: 4.9,
    reviews: 167,
    images: img('iphone-14-pro'),
    description: 'iPhone 14 Pro met Dynamic Island, Always-On display en 48MP hoofdcamera.'
  },
  {
    slug: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    brand: 'Apple',
    storage: '256GB',
    color: 'Zwart',
    battery: 94,
    price: 899,
    originalPrice: 1629,
    rating: 4.9,
    reviews: 112,
    images: img('iphone-14-pro-max'),
    description: 'iPhone 14 Pro Max met 6,7" Super Retina XDR display en Dynamic Island.'
  },

  // --- iPhone 15 series ---
  {
    slug: 'iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    storage: '128GB',
    color: 'Zwart',
    battery: 96,
    price: 749,
    originalPrice: 969,
    rating: 4.8,
    reviews: 91,
    images: img('iphone-15'),
    description: 'iPhone 15 met USB-C, Dynamic Island en 48MP hoofdcamera.'
  },
  {
    slug: 'iphone-15-plus',
    name: 'iPhone 15 Plus',
    brand: 'Apple',
    storage: '128GB',
    color: 'Roze',
    battery: 95,
    price: 849,
    originalPrice: 1149,
    rating: 4.8,
    reviews: 54,
    images: img('iphone-15-plus'),
    description: 'iPhone 15 Plus met 6,7" display, USB-C en premium dual-camerasysteem.'
  },
  {
    slug: 'iphone-15-pro-black',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    storage: '128GB',
    color: 'Black Titanium',
    battery: 97,
    price: 929,
    originalPrice: 1229,
    rating: 4.9,
    reviews: 189,
    images: img('iphone-15-pro-black'),
    description: 'iPhone 15 Pro in Black Titanium met A17 Pro chip, Action Button en titanium behuizing.'
  },
  {
    slug: 'iphone-15-pro-white',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    storage: '128GB',
    color: 'White Titanium',
    battery: 97,
    price: 929,
    originalPrice: 1229,
    rating: 4.9,
    reviews: 143,
    images: img('iphone-15-pro-white'),
    description: 'iPhone 15 Pro in White Titanium met A17 Pro chip en 48MP Pro camerasysteem.'
  },
  {
    slug: 'iphone-15-pro-natural',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    storage: '128GB',
    color: 'Natural Titanium',
    battery: 97,
    price: 949,
    originalPrice: 1229,
    rating: 4.9,
    reviews: 201,
    images: img('iphone-15-pro-natural'),
    description: 'iPhone 15 Pro in Natural Titanium — licht, sterk en krachtig met A17 Pro chip.'
  },
  {
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    storage: '256GB',
    color: 'Blue Titanium',
    battery: 96,
    price: 1149,
    originalPrice: 1449,
    rating: 5.0,
    reviews: 178,
    images: img('iphone-15-pro-max'),
    description: 'iPhone 15 Pro Max met 5x telefoto lens, titanium frame en A17 Pro chip.'
  },

  // --- iPhone 16 series ---
  {
    slug: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    storage: '128GB',
    color: 'Zwart',
    battery: 98,
    price: 879,
    originalPrice: 969,
    rating: 4.9,
    reviews: 63,
    images: img('iphone-16'),
    description: 'iPhone 16 met A18 chip, Apple Intelligence en verbeterd dual-camerasysteem.'
  },
  {
    slug: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    storage: '128GB',
    color: 'Zwart',
    battery: 99,
    price: 1099,
    originalPrice: 1229,
    rating: 5.0,
    reviews: 47,
    images: img('iphone-16-pro'),
    description: 'iPhone 16 Pro met A18 Pro chip, 48MP Fusion camera en Camera Control.'
  },
  {
    slug: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    storage: '256GB',
    color: 'Desert Titanium',
    battery: 99,
    price: 1349,
    originalPrice: 1479,
    rating: 5.0,
    reviews: 38,
    images: img('iphone-16-pro-max'),
    description: 'iPhone 16 Pro Max in Desert Titanium — het meest geavanceerde iPhone model ooit.'
  },

  // --- Samsung ---
  {
    slug: 'samsung-s22-ultra',
    name: 'Samsung Galaxy S22 Ultra',
    brand: 'Samsung',
    storage: '256GB',
    color: 'Groen',
    battery: 89,
    price: 479,
    originalPrice: 1249,
    rating: 4.7,
    reviews: 132,
    images: img('samsung-s22-ultra'),
    description: 'Galaxy S22 Ultra met ingebouwde S Pen, 108MP camera en 100x Space Zoom.'
  },
  {
    slug: 'samsung-s23-ultra',
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    storage: '256GB',
    color: 'Zwart',
    battery: 93,
    price: 629,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 118,
    images: img('samsung-s23-ultra'),
    description: 'Galaxy S23 Ultra met 200MP hoofdcamera, S Pen en Snapdragon 8 Gen 2.'
  },
  {
    slug: 'samsung-s24-grey',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    storage: '128GB',
    color: 'Grijs',
    battery: 95,
    price: 549,
    originalPrice: 899,
    rating: 4.7,
    reviews: 76,
    images: img('samsung-s24-grey'),
    description: 'Galaxy S24 met Galaxy AI, Exynos 2400 en slanke titanium look.'
  },
  {
    slug: 'samsung-s24-black',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    storage: '128GB',
    color: 'Zwart',
    battery: 95,
    price: 549,
    originalPrice: 899,
    rating: 4.7,
    reviews: 89,
    images: img('samsung-s24-black'),
    description: 'Galaxy S24 met Galaxy AI-functies, triple camera en 6,2" Dynamic AMOLED.'
  },
  {
    slug: 'samsung-s25-fe',
    name: 'Samsung Galaxy S25 FE',
    brand: 'Samsung',
    storage: '128GB',
    color: 'Blauw',
    battery: 97,
    price: 649,
    originalPrice: 849,
    rating: 4.8,
    reviews: 34,
    images: img('samsung-s25-fe'),
    description: 'Galaxy S25 FE — het beste van Samsung\'s vlaggenschip voor een vriendelijke prijs.'
  },
  {
    slug: 'samsung-s25-ultra-grey',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    storage: '256GB',
    color: 'Titanium Grijs',
    battery: 98,
    price: 1049,
    originalPrice: 1499,
    rating: 5.0,
    reviews: 52,
    images: img('samsung-s25-ultra-grey'),
    description: 'Galaxy S25 Ultra in Titanium Grijs met Snapdragon 8 Elite en 200MP camera.'
  },
  {
    slug: 'samsung-s25-ultra-white',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    storage: '256GB',
    color: 'Titanium Wit',
    battery: 98,
    price: 1049,
    originalPrice: 1499,
    rating: 5.0,
    reviews: 41,
    images: img('samsung-s25-ultra-white'),
    description: 'Galaxy S25 Ultra in Titanium Wit — premium design met Galaxy AI.'
  }
];

// Backwards-compatible helpers (image/condition left as stubs so existing
// imports keep working after the condition/filter removal).
export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
