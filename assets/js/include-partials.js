async function includePartial(selector, url) {
  const container = document.querySelector(selector);
  if (!container) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    container.innerHTML = await res.text();
  } catch (e) {
    console.error("Include error:", url, e);
  }
}
// call on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  includePartial("#site-header", "/partials/header.html");
  includePartial("#site-footer", "/partials/footer.html");
});
