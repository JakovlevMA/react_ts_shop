import React, {useState} from 'react';
import {IProduct} from "../modules";
import '../App.css';

const Product = () => {
    const products: IProduct[] = [{
        category: 'T-shorts',
        image: 'https://winpix.ru/content/images/preview/photo%20souvenirs/t-shirt/futbolka-muszh-black.jpg',
        price: 2.99,
        title: 'Прикольная футболка',
        id: 1,
        colour: 'Black',
        details: 'Данная футболка предназначена для сигма мужчин'
    }, {
        category: 'Shorts',
        image: 'https://basket-03.wb.ru/vol314/part31429/31429521/images/big/1.jpg',
        price: 1.99,
        title: 'Прикольные шорты',
        id: 2,
        colour: 'Black',
        details: 'Данные шорты предназначены для сигма мужчин'
    }, {
        category: 'Jackets',
        image: 'https://files.gifts.ru/reviewer/tb/14/02898312_2_500.jpg',
        price: 25.99,
        title: 'Прикольная куртка',
        id: 3,
        colour: 'Black',
        details: 'Данная куртка предназначена для сигма мужчин'
    }]
    const [details, setDetails] = useState<boolean[]>(new Array(products.length).fill(false))

    const toggleDetails = (index: number): void => {
        setDetails(prevDetails => {
            const newDetails = [...prevDetails];
            newDetails[index] = !newDetails[index];
            return newDetails;
        });
    };

    return (
        <div className='product'>
            {products.map((product: IProduct, index: number) => (
                <div className='card_product' key={product.id}>
                    <img src={product.image} alt="картинка футболки" className='img_product'/>
                    <p className='title_product'>{product.title}</p>
                    <p className='price_product'>{product.price}</p>
                    <button
                        className='btn_details'
                        onClick={() => toggleDetails(index)}
                    >
                        {details[index] ? 'Hide details' : 'Show details'}
                    </button>
                    {details[index] && (
                        <div>
                            <p>{product.details}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Product;