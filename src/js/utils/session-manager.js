const sessionManager = (() => {
  /**
   * @param {String} key
   * @param {any} val
   */
  const saveValue = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  /**
   * @param {String} key
   */
  const getValue = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
  };

  /**
   * @param {String} key
   */
  const remove = (key) => {
    sessionStorage.removeItem(key);
  };

  const clear = () => {
    sessionStorage.clear();
  };

  return {
    saveValue: saveValue,
    getValue: getValue,
    remove: remove,
    clear: clear,
  };
})();

export default sessionManager;
