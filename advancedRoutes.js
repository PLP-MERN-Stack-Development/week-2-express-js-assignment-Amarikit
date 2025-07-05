const express = require('express');
const router = express.Router();

let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];


router.get('/', (req, res) => {
  let result = [...products];

  const { category, page = 1, limit = 10 } = req.query;

  
  if (category) {
    result = result.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginated = result.slice(startIndex, endIndex);

  res.json({
    total: result.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated
  });
});

router.get('/search', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Name query parameter is required' });
  }

  const results = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json({
    count: results.length,
    results
  });
});

router.get('/stats', (req, res) => {
  const totalProducts = products.length;
  const categories = {};

  products.forEach(p => {
    categories[p.category] = (categories[p.category] || 0) + 1;
  });

  res.json({
    totalProducts,
    categories
  });
});


module.exports = router;
