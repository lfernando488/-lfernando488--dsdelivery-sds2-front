import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders() {

  const [producs, setproducts] = useState<Product[]>([]); 

  useEffect(() => {
    fetchProducts()
      .then(response => setproducts(response.data))
      .catch(error => console.log("error"))
  }, [])

  return (
    <div className="orders-container">
        <StepsHeader /> 
        <ProductsList products={producs}/>
        <OrderLocation />
       
    </div>
  );
}

export default Orders;
