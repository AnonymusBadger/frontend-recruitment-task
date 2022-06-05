/**
 * @callback onNotify
 * @param {any} value
 */

/**
 * Executes the callback when notified.
 * @param {onNotify} callback
 */
const makeObserver = (callback) => {
  return {
    notify: (value) => {
      callback(value);
    },
  };
};

export default makeObserver;
