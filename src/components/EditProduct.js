import React, { useState } from 'react';

const EditProduct = ({ product, onSave, onCancel }) => {
    const [editedProduct, setEditedProduct] = useState({
        id: product.id,
        prodName: product.prodName,
        price: product.price,
        brand: product.brand,
    });

    const [showAlert, setShowAlert] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        
        if (value.trim() === '') {
            setValidationErrors({ ...validationErrors, [name]: `${name} is required` });
        } else {
            setValidationErrors({ ...validationErrors, [name]: undefined });
        }

       
        if (name === 'price' && isNaN(value)) {
            setValidationErrors({ ...validationErrors, [name]: 'Price must be a valid number' });
        } else {
            setValidationErrors({ ...validationErrors, [name]: undefined });
        }

        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSave = async () => {
       
        if (Object.values(validationErrors).some((error) => error !== undefined)) {
            return;
        }

        try {
           
            const response = await fetch(`http://localhost:5297/api/Products/${editedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prodName: editedProduct.prodName,
                    price: editedProduct.price,
                    brand: editedProduct.brand,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const updatedProduct = await response.json();

            onSave(updatedProduct);

            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            onCancel();
        } catch (error) {
            console.error('Error updating product:', error.message);
        }
    };

    return (
        <div className="edit-form">
            <h3>Edit Product</h3>
            <form>
                <label htmlFor="prodName">Name:</label>
                <input
                    type="text"
                    id="prodName"
                    name="prodName"
                    value={editedProduct.prodName}
                    onChange={handleInputChange}
                />
                {validationErrors.prodName && (
                    <div className="error">{validationErrors.prodName}</div>
                )}

                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                />
                {validationErrors.price && (
                    <div className="error">{validationErrors.price}</div>
                )}

                <label htmlFor="brand">Brand:</label>
                <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={editedProduct.brand}
                    onChange={handleInputChange}
                />
                {validationErrors.brand && (
                    <div className="error">{validationErrors.brand}</div>
                )}

                <button type="button" onClick={handleSave}>
                    Save Changes
                </button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>

            {showAlert && (
                <div className="alert">Changes saved successfully!</div>
            )}
        </div>
    );
};

export default EditProduct;
