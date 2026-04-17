// Centralised WhatsApp deep-link helper.
// Keep the number here so it can be changed in one place later.
export const WHATSAPP_NUMBER = '31624978746'; // +31 6 24978746

export function whatsappUrl(message = '') {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${text}` : ''}`;
}

export function productOrderUrl(product) {
  const msg = product
    ? `Hoi Pixel! Ik wil graag de ${product.name} (${product.storage} · ${product.color}) bestellen voor €${product.price}. Kunnen jullie mij helpen?`
    : 'Hoi Pixel! Ik heb een vraag over een bestelling.';
  return whatsappUrl(msg);
}

export function generalContactUrl() {
  return whatsappUrl('Hoi Pixel! Ik heb een vraag.');
}
