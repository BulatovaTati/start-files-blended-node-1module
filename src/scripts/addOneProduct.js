import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
  const productList = await fs.readFile(PATH_DB, 'utf-8');
  const productListParse = productList.trim() ? JSON.parse(productList) : [];

  productListParse.push(createFakeProduct());
  await fs.writeFile(
    PATH_DB,
    JSON.stringify(productListParse, null, 2),
    'utf-8',
  );
};
addOneProduct();
