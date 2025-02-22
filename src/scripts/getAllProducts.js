import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
const getAllProducts = async () => {
  try {
    const readProducts = await fs.readFile(PATH_DB, 'utf-8');
    return readProducts.trim() ? JSON.parse(readProducts) : null;
  } catch (error) {
    console.error(error);
  }
};
console.log(await getAllProducts());
