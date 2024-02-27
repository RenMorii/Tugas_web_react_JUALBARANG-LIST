import React, { useState } from 'react';
import './App.css';

const productList = [
  { id: 1, name: 'Tas', price: 125000 },
  { id: 2, name: 'Buku 1 Pack', price: 95000 },
  { id: 3, name: 'Sepatu', price: 300000 },
  { id: 4, name: 'Kaos Kaki', price: 26000 },
  { id: 5, name: 'Seragam', price: 100000 },
  { id: 6, name: 'Kotak Pencil', price: 25000 },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1)[0];

    // Hitung kembali total harga setelah menghapus barang
    const newTotal = total - removedItem.price;

    setCart(updatedCart);
    setTotal(newTotal);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Beli Yuk</h1>
      </div>
      <div className="container">
        <div className="product-list">
          {productList.map((product) => (
            <div key={product.id} className="product">
              <div>{product.name}</div>
              <div>Harga: Rp.{product.price.toLocaleString()}</div>
              <button className="button" onClick={() => addToCart(product)}>
                Beli
              </button>
            </div>
          ))}
        </div>

        <div className="container">
          <h2>Keranjang Belanja</h2>
        </div>
        
        <div className="cart">
          {cart.map((item, index) => (
            <div key={item.id} className="cart-item">
              <div>{item.name}</div>
              <div>Harga: Rp.{item.price.toLocaleString()}</div>
              <button className="button" onClick={() => removeFromCart(index)}>
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>

      { <div className="footer">
        <strong>Total Harga: Rp.{total.toLocaleString()}</strong>
      </div> }
    </div>
  );
};

export default App;
