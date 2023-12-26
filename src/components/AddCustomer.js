import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = () => {
        axios.post('http://localhost:5138/api/Customers', customer)
            .then(response => console.log('Customer added:', response.data))
            .catch(error => console.error('Error adding customer: ', error));
    };

    return (
        <div>
            <h1>Add Customer</h1>
            <form  style={{display:"flex",justifyContent:"center"}}>
                <label>First Name: <input type="text" name="firstName" onChange={handleInputChange} /></label><br />
                <label>Last Name: <input type="text" name="lastName" onChange={handleInputChange} /></label><br />
                <label>Address: <input type="text" name="address" onChange={handleInputChange} /></label><br />
                <label>Phone: <input type="text" name="phone" onChange={handleInputChange} /></label><br />
                <button  style={{backgroundColor:'green'}} type="button" onClick={handleSubmit}>Add Customer</button>
            </form>
        </div>
    );
};

export default AddCustomer;
