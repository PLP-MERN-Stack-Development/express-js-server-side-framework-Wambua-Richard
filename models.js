
// In-memory database
let products = [
    { id: 1, name: 'Honey Jar', description: 'Pure organic honey', price: 10, category: 'Food', inStock: true },
    { id: 2, name: 'Beeswax Candle', description: 'Natural beeswax candle', price: 15, category: 'Home', inStock: false },
    { id: 3, name: 'Royal Jelly', description: 'Nutrient-rich bee secretion', price: 25, category: 'Health', inStock: true },
    { id: 4, name: 'Bee Pollen', description: 'Protein-rich pollen granules', price: 12, category: 'Health', inStock: true },
    { id: 5, name: 'Honey Comb', description: 'Raw honeycomb from the hive', price: 20, category: 'Food', inStock: false },
  ];
  
  // --- CRUD Operations ---
  
  const getAllProducts = () => products;
  
  const getProductById = (id) => products.find((p) => p.id === parseInt(id));
  
  const createProduct = (data) => {
    const newProduct = { id: Date.now(), ...data };
    products.push(newProduct);
    return newProduct;
  };
  
  const updateProduct = (id, data) => {
    const index = products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return null;
    products[index] = { ...products[index], ...data };
    return products[index];
  };
  
  const deleteProduct = (id) => {
    const index = products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return null;
    return products.splice(index, 1)[0];
  };
  
  // --- Advanced Features ---
  
  const filterProducts = (category) =>
    products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  
  const searchProducts = (name) =>
    products.filter((p) => p.name.toLowerCase().includes(name.toLowerCase()));
  
  const paginateProducts = (page = 1, limit = 2) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return products.slice(start, end);
  };
  
  const getStats = () => {
    const stats = {};
    products.forEach((p) => {
      stats[p.category] = (stats[p.category] || 0) + 1;
    });
    return stats;
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    filterProducts,
    searchProducts,
    paginateProducts,
    getStats,
  };
  