
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  filterProducts,
  searchProducts,
  paginateProducts,
  getStats,
} = require('./models');

// --- Error Classes ---
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

class ValidationError extends AppError {
  constructor(message = 'Invalid input data') {
    super(message, 400);
  }
}

// --- ROUTES ---

// GET /api/products (with optional filters, search, pagination)
router.get('/', (req, res) => {
  let { category, name, page, limit } = req.query;
  let results = getAllProducts();

  if (category) results = filterProducts(category);
  if (name) results = searchProducts(name);
  if (page && limit) results = paginateProducts(parseInt(page), parseInt(limit));

  res.json(results);
});

// GET /api/products/:id
router.get('/:id', (req, res, next) => {
  const product = getProductById(req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
});

// POST /api/products
router.post('/', (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || !price || !category)
    return next(new ValidationError('Missing required fields'));
  const newProduct = createProduct({ name, description, price, category, inStock });
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
router.put('/:id', (req, res, next) => {
  const updated = updateProduct(req.params.id, req.body);
  if (!updated) return next(new NotFoundError('Product not found'));
  res.json(updated);
});

// DELETE /api/products/:id
router.delete('/:id', (req, res, next) => {
  const deleted = deleteProduct(req.params.id);
  if (!deleted) return next(new NotFoundError('Product not found'));
  res.json({ message: 'Product deleted successfully' });
});

// GET /api/products/stats (Advanced)
router.get('/stats/data', (req, res) => {
  res.json(getStats());
});

module.exports = router;
