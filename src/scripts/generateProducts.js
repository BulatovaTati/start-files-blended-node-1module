import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (number) => {
  const products = await fs.readFile(PATH_DB);
  const parsedProducts = JSON.parse(products);
  try {
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
