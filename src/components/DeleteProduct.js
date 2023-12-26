import React from 'react';

const DeleteProduct = ({ id, onDelete, onCancel }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div>
            <p>Are you sure you want to delete this product?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={onCancel}>No</button>
        </div>
    );
};

export default DeleteProduct;
