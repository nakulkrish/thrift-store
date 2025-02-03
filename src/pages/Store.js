import React, { useState, useEffect } from 'react';
import ProductQuantity from '../components/ProductQuantity';
import './store.css';
import ProductCard from '../components/ProductCard'; // Ensure correct path

const Store = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      // Mock product data as an example
      const productData = [
        { id: 1, name: 'Gold Charm Necklace', description: 'Gold Plated Necklace with 7 charms', price: '₹100', image: 'thrift-store/images/product1.jpg' },
        { id: 2, name: 'Denim Jacket', description: 'Stylish denim jacket', price: '₹700', image: '/images/product2.webp' },
        { id: 3, name: 'Rolex Watch', description: 'Rolex Rainbow Daytona Chronograph Watches', price: '₹1199', image: '/images/product3.jpg' },
      ];
      setProducts(productData);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.');
    }
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  const handleCloseModal = () => {
    setShowProductDetails(false);
    setSelectedProduct(null);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="store-container">
      <h1>Thrift Treasure Store</h1>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {showProductDetails && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p><strong>{selectedProduct.price}</strong></p>

            {/* Add ProductQuantity inside the modal */}
            <ProductQuantity />

            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;