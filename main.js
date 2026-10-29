// Facebook pages supplied in notes.txt, in store order.
const stores = [
  { id: 'malibooze', name: 'Malibooze', facebook: 'https://www.facebook.com/maliboozeliquortx' },
  { id: 'discount', name: 'Discount Liquor', facebook: 'https://www.facebook.com/DiscountLiquorTX' },
  { id: 'university', name: 'University Liquor', facebook: 'https://www.facebook.com/profile.php?id=61582010642465' }
];

document.getElementById('year').textContent = new Date().getFullYear();
const confirmed = stores.filter(store => /^https:\/\/(www\.)?(facebook\.com|fb\.com)\//i.test(store.facebook));
if (confirmed.length) {
  const container = document.getElementById('social-links');
  container.replaceChildren();
  for (const store of confirmed) {
    const link = document.createElement('a');
    link.className = 'social-row';
    link.href = store.facebook;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `${store.name} ↗`;
    container.append(link);
    const cardLink = document.querySelector(`[data-store="${store.id}"]`);
    cardLink.href = store.facebook;
    cardLink.target = '_blank';
    cardLink.rel = 'noopener noreferrer';
    cardLink.firstChild.textContent = 'Visit Facebook ';
  }
}
