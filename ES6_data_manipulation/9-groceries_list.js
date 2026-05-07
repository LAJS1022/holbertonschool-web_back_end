// 9-groceries_list.js

/**
 * Returns a Map of groceries with their quantities.
 *
 * @returns {Map} Map containing grocery items and their quantities
 */
export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
