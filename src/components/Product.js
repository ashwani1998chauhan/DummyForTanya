import React, { useState, useEffect } from 'react';
import './Product.css';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5297/api/Products');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    setEditProductId(id);
  };

  const handleEditSubmit = async (editedProduct) => {
    try {

      console.log(`Edit product with ID: ${editProductId} and data:`, editedProduct);


      setEditProductId(null);


      const updatedResponse = await fetch('http://localhost:5297/api/Products');

      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated products');
      }

      const updatedData = await updatedResponse.json();
      setProducts(updatedData);
    } catch (error) {
      console.error('Error editing product:', error.message);
    }
  };

  const handleEditCancel = () => {
    setEditProductId(null);
  };

  const handleDeleteClick = (id) => {
    setDeleteProductId(id);
  };

  const handleDeleteCancel = () => {
    setDeleteProductId(null);
  };

  const handleDeleteConfirm = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const deleteResponse = await fetch(`http://localhost:5297/api/Products/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!deleteResponse.ok) {
          throw new Error('Failed to delete product');
        }


        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));

        console.log(`Delete product with ID: ${id}`);
      } catch (error) {
        console.error('Error deleting product:', error.message);
      }
    }


    setDeleteProductId(null);
  };

  return (
    <div>
      <h2 className="heading">Products</h2>
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.prodName}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.brand}</td>
                <td>
                  <button onClick={() => handleEdit(product.id)}>Edit</button>
                  <button onClick={() => handleDeleteClick(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available</p>
      )}


      {editProductId && (
        <EditProduct
          product={products.find((product) => product.id === editProductId)}
          onSave={handleEditSubmit}
          onCancel={handleEditCancel}
        />
      )}


      {deleteProductId && (
        <DeleteProduct id={deleteProductId} onDelete={handleDeleteConfirm} onCancel={handleDeleteCancel} />
      )}
    </div>
  );
};

export default Products;
