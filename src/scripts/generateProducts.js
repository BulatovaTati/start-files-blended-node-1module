import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (number) => {
  try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const parsedProducts = products.trim() ? JSON.parse(products) : [];

    for (let index = 0; index < number; index++) {
      parsedProducts.push(createFakeProduct());
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(parsedProducts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Помилка додавання контактів:', error);
  }
};

generateProducts(3);
