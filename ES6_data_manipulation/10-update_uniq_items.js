// 10-update_uniq_items.js

/**
 * Updates all items in a Map where the quantity is 1 to 100.
 *
 * @param {Map} map - Map of grocery items
 * @returns {Map} The updated map
 * @throws {Error} If the argument is not a Map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
