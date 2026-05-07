// 7-load_balancer.js

/**
 * Returns the value of the promise that resolves first.
 *
 * @param {Promise} chinaDownload - A promise representing the China download
 * @param {Promise} USDownload - A promise representing the US download
 * @returns {Promise} A promise that resolves with the value of the fastest download
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
