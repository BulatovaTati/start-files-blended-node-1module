import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
const getAllProducts = async () => {
  try {
    const readProducts = await fs.readFile(PATH_DB, 'utf-8');
    const parseProd = JSON.parse(readProducts);
    return parseProd;
  } catch (error) {
    console.error;
  }
};
console.log(await getAllProducts());
