async function fetchMockProducts() {
  const COUNT = 1000;
  const products = Array.from({ length: COUNT }, (_, i) => ({
    id: i + 1,
    title: "Product " + (i + 1),
    price: Math.random() * 100,
    available: Math.random() > 0.2,
    created_at: new Date(
      Date.now() - Math.random() * 10000000000
    ).toISOString(),
  }));
  return new Promise((resolve) => setTimeout(() => resolve(products), 50));
}

// Dirty Version
async function loadProductsDirty() {
  console.time("Dirty Load Time");

  const data = await fetchMockProducts();
  const items = [];

  for (let i = 0; i < data.length; i++) {
    const p = data[i];
    if (p.available && p.price > 0) {
      const d = new Date(p.created_at);
      items.push({
        id: p.id,
        name: p.title.toUpperCase(),
        price: `$${p.price.toFixed(2)}`,
        date: d.toLocaleDateString("en-US"),
      });
    }
  }

  items.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const container = document.getElementById("products-dirty");
  for (let i = 0; i < items.length; i++) {
    const el = document.createElement("div");
    el.innerHTML = `<h3>${items[i].name}</h3><p>${items[i].price} - ${items[i].date}</p>`;
    container.appendChild(el);
  }

  console.timeEnd("Dirty Load Time");
}

// Clean Version
async function loadProductsClean() {
  console.time("Clean Load Time");

  const products = await fetchMockProducts();
  const filtered = filterAvailableProducts(products);
  const transformed = transformProducts(filtered);
  const sorted = sortByName(transformed);
  renderProducts(sorted, "products-clean");

  console.timeEnd("Clean Load Time");
}

function filterAvailableProducts(products) {
  return products.filter((p) => p.available && p.price > 0);
}

function transformProducts(products) {
  return products.map((p) => ({
    id: p.id,
    name: formatProductName(p.title),
    price: formatPrice(p.price),
    date: formatDate(p.created_at),
  }));
}

function formatProductName(name) {
  return name.toUpperCase();
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US");
}

function sortByName(products) {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  products.forEach((p) => {
    const el = document.createElement("div");
    el.innerHTML = `<h3>${p.name}</h3><p>${p.price} - ${p.date}</p>`;
    container.appendChild(el);
  });
}

// Performant Version
async function loadProductsPerformant() {
  console.time("Performant Load Time");

  const products = await fetchMockProducts();
  const container = document.getElementById("products-performant");
  container.innerHTML = "";

  const list = products
    .filter((p) => p.available && p.price > 0)
    .map((p) => ({
      id: p.id,
      name: p.title.toUpperCase(),
      price: `$${p.price.toFixed(2)}`,
      date: new Date(p.created_at).toLocaleDateString("en-US"),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < list.length; i++) {
    const el = document.createElement("div");
    el.innerHTML = `<h3>${list[i].name}</h3><p>${list[i].price} - ${list[i].date}</p>`;
    fragment.appendChild(el);
  }

  container.appendChild(fragment);
  console.timeEnd("Performant Load Time");
}

loadProductsDirty()
  .then(() => loadProductsClean())
  .then(() => loadProductsPerformant());
