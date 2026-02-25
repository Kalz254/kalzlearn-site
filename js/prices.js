const USD_TO_KES = 152; // ← set your fixed rate here

document.querySelectorAll(".price").forEach(priceEl => {
  const usd = priceEl.dataset.usd;
  const kes = usd * USD_TO_KES;

  const kesEl = priceEl.querySelector(".kes-price");
  kesEl.textContent = `≈ KES ${kes.toLocaleString()} at checkout`;
});