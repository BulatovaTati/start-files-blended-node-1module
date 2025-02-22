import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

async function countProducts() {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProducts = products.trim() ? JSON.parse(products) : [];

  return parsedProducts.length;
}

console.log(await countProducts());
