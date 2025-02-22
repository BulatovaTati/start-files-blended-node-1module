import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const removeRandomProduct = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProducts = products.trim() ? JSON.parse(products) : [];

  const idxRandom = Math.floor(Math.random() * parsedProducts.length);
  parsedProducts.splice(idxRandom, 1);
  await fs.writeFile(PATH_DB, JSON.stringify(parsedProducts, null, 2), 'utf-8');
};
removeRandomProduct();
