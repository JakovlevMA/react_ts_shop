import React from 'react';
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {IProduct} from "./modules";

function App() {
    const products: IProduct = {
        category: 'T-short',
        image: 'https://winpix.ru/content/images/preview/photo%20souvenirs/t-shirt/futbolka-muszh-black.jpg',
        price: 2.99,
        title: 'Прикольная футболка',
        id: 1
    }

  return (
      <div className='card_product'>
          <img src={products.image} alt="картинка футболки" className='img_product'/>
          <p className='title_product'>{products.title}</p>
          <p className='price_product'>{products.price}</p>
      </div>
  );
}

export default App;
