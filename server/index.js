const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Listino prodotti iniziale (simula un database per ora)
let products = [
  { id: 1, name: "Infissi in PVC TermoIsolanti", price: 250, category: "PVC" },
  { id: 2, name: "Infissi in Alluminio Minimal", price: 320, category: "Alluminio" },
  { id: 3, name: "Portoncini Blindati di Sicurezza", price: 450, category: "Sicurezza" }
];

// Rotta GET: Il frontend richiede la lista dei prodotti
app.get('/api/products', (req, res) => {
  res.json(products);
});
// Rotta POST: Aggiungi un nuovo prodotto
app.post('/api/products', (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
  }

  // Creiamo un nuovo oggetto con un ID incrementale
  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name,
    price: Number(price),
    category
  };

  products.push(newProduct);
  res.status(201).json({ message: "Prodotto aggiunto con successo", product: newProduct });
});

// Rotta PUT: Il frontend aggiorna il prezzo di un prodotto
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  const product = products.find(p => p.id === Number(id));
  if (!product) {
    return res.status(404).json({ error: "Prodotto non trovato" });
  }

  product.price = Number(price);
  res.json({ message: "Prezzo aggiornato con successo", product });
});

// Avviamo il server
app.listen(PORT, () => {
  console.log(`Server Node avviato sulla porta ${PORT} 🚀`);
});