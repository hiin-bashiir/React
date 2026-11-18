
import React from 'react';

import Product from './Product';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  const products = [
    { id: 1, name: 'Widget', price: 19.99 },
    { id: 2, name: 'Gadget', price: 29.99 },
  ];

  return (
    <CartProvider>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}

        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
