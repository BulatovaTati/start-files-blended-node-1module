import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

async function countProducts() {
  const products = await fs.readFile(PATH_DB);
  const parsedProducts = JSON.parse(products);

  return parsedProducts.length;
}

console.log(await countProducts());
