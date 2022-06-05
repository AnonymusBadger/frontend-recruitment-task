/**
 * @param {HTMLElement} el
 */
const makeDisplay = (el) => {
  /**
   * @param {String | Number} val
   */
  const setValue = (val) => {
    el.innerHTML = val;
  };

  return {
    update: setValue,
    notify: setValue,
  };
};

export default makeDisplay;
