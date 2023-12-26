import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Show = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5138/api/Customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Customer List</h1>
            <ul >
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.firstName} {customer.lastName} - {customer.address} - {customer.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Show;